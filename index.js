const fs = require("fs");
const inquirer = require("inquirer");

const readmeWriter = (data, badge) => {
  var markdownContent;
  if (data.screenshot === "yes") {
    markdownContent = 
    `# ${data.title}

    ![badge for ${data.license}](https://img.shields.io/badge/license-${badge}-brightgreen)

    ## Description
    ${data.description}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [License](#license)
    4. [Contributing](#contributing)
    5. [Tests](#tests)
    6. [Questions](#questions)

    ## Installation
    ${data.installation}. Dependencies - ${data.dependencies}

    ## Usage
    ${data.usage}\n
    ![alt text](assets/images/screenshot.png)

    ## License
    - This application is licensed under the ${data.license} License

    ## Contributing
    ${data.contributing}

    ## Tests
    ${data.tests}

    ## Questions
    - Reach me via email at ${data.email} or issues on [github](https://github.com/${data.githubUser})`;
  } else {
    markdownContent = `# ${data.title}

![badge for ${data.license}](https://img.shields.io/badge/license-${badge}-brightgreen)

## Description
${data.description}

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.installation}. Dependencies - ${data.dependencies}

## Usage
${data.usage}

## License
- This application is licensed under the ${data.license} License

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- Reach me via email at ${data.email} or issues on [github](https://github.com/${data.githubUser})`;
  }
  fs.writeFile("README.md", markdownContent, (err) => {
    err ? console.log(err) : console.log("README.md generated");
  });
};

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the short description of the project?",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install the project?",
    },
    {
      type: "input",
      name: "dependencies",
      message: "What are the dependencies of the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage of the project?",
    },
    {
      type: "list",
      name: "screenshot",
      message: "Do you have screenshots for your project?",
      choices: ["yes", "no"],
    },
    {
      type: "list",
      name: "license",
      choices: [
        "MIT",
        "Other",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicense",
        "BSD 2-clause",
        "LGPLv3",
        "AGPLv3",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "How does one contribute to the project?",
    },
    {
      type: "input",
      name: "tests",
      message: "Any tests for the project?",
    },
    {
      type: "input",
      name: "githubUser",
      message: "What is your GitHub username?",
    },
    {
      type: "email",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((response) => {
    let badge = response.license.split(' ')
    readmeWriter(response, badge);
  });
