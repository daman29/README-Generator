const fs = require('fs');
const inquirer = require('inquirer');

const readmeWriter = (data) => {
    return `# ${data.title}

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
    ${data.installation}

    ## Usage
    ${data.usage}
    
    ## License
    ${data.license}
    
    ## Contributing
    ${data.contributing}
    
    ## Tests
    ${data.tests}
    
    ## Questions
    ${data.questions}`
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the short description of the project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?',
        placeholder: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of the project?'
    },
    {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'COPYING', 'LIC']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How does one contribute to the project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Any tests for the project?'
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your GitHub username?'
    },
    {
        type: 'email',
        name: 'email',
        message: 'What is your email address?'
    }
]).then(response => {
    console.log(response)
})