// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import licenses from './license.js';
import generateMarkdown from './utils/generateMarkdown.js';
import path from 'path';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your preferred email?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'mediaLinks',
        message: 'Please provide any media links here.',
    },
    {
        type: 'input',
        name: 'intro',
        message: 'Please answer the remaining questions in complete sentences. Press Enter to continue.',
        default: "",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project.',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was the motivation for the project?',
    },
    {
        type: 'input',
        name: 'problem',
        message: 'Why was this project developed? And what problem does it solve?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install the project?',
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
        message: 'Let us know how others can contribute to the project.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide any tests and examples on how to run them.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project.',
        choices: licenses, 
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
    return fs.writeFileSync(path.join(process.cwd(), fileName), answers);
}
init();

export default questions;