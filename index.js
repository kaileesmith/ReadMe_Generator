const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const writeFileSync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of this project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like others to contribute to this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the test instructions?',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync()
}

// function to initialize program
function init() {
inquirer.prompt(questions)
.then(data => { 
    writeToFile("ReadMe.md", generateMarkdown(data));
})
}

// function call to initialize program
init();
