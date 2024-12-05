// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import licenses from './license.js';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please list your collaborators and/or any third-party assets used.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Let us know how others can contribute to your project',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any tests and examples on how to run them here.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project.',
        choices: licenses, 
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email?',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answer) => {
        writeToFile("./README.md", generateMarkdown({...answer}));
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    
}
init();
