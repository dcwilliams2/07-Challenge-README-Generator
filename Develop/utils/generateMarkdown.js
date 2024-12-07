// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import questions from "../index.js";
import licenses from "../license.js";

function renderLicenseBadge(licenseValue) {
  if (!licenseValue) {
    return "";
  } else {
    return `![Static Badge](https://img.shields.io/badge/License-${encodeURIComponent(licenseValue)}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseValue) {
  if (!licenseValue) {
    return "";
  } else {
    const licenseObj = licenses.find((lic) => lic.name === licenseValue);
    return licenseObj ? licenseObj.link : "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseValue) {
  if (!licenseValue) {
    return "";
  } else {
    const licenseLink = renderLicenseLink(licenseValue);
    return `Licensed under [${licenseValue}](${licenseLink}) license.`;
  }
}

// TODO: Create a function to generate markdown for README

// For Installation and usage: Could add questions that prompt for the code needed to install and launch program.
//Would need to separate the question and responses from the how to text and recall the code between ```sh & ``` 
//in the markdown generator. Could make a loop(?) to ask the prompt for steps needed to install the application. 
//Text instructions and then code. Recall responses via 1. , 2. 3. etc. under installation section.
//May also want to add a console log reading "Complete. File Created" or "Error".

function generateMarkdown(answer) {
  return `# ${answer.title}
  ${renderLicenseBadge(answer.license)}
  ## Description
  ${answer.description} ${answer.motivation} ${answer.problem}
  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Media Links](#media-links)
   - [Credits](#credits)
   - [How to Contribute](#how-to-contribute)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
  ## Installation
  ${answer.installation}
  ## Usage
  ${answer.usage}
  ## Media Links
  Visit [Here](${answer.mediaLinks}) for linked media.
  ## Credits
  ${answer.credits}
  ## How to Contribute
  ${answer.contributing}
  ## Tests
  ${answer.test}
  ## Questions
  Please send any questions [Here](mailto:${answer.email}) or visit GitHub [Here](https://github.com/${answer.username}).
  ## License
  ${renderLicenseSection(answer.license)}
`;
}

export default generateMarkdown;
