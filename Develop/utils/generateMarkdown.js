// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import questions from "../index.js";
import licenses from "../license.js";

function renderLicenseBadge(licenseName) {
  if (!licenseName) {
    return "";
  } else {
    return `![Static Badge](https://img.shields.io/badge/License-${licenseName}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  if (!licenseName) {
    return "";
  } else {
    const licenseObj = licenses.find((lic) => lic.name === licenseName);
    return licenseObj ? licenseObj.link : "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName) {
  if (!licenseName) {
    return "";
  } else {
    const licenseLink = renderLicenseLink(licenseName);
    return `Licensed under [${licenseName}](${licenseLink}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ${renderLicenseBadge(answer.license)}
  ## Description
  ${answer.description}
  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [How to Contribute](#how-to-contribute)
   - [Tests](#tests)
   - [Questions](#questions)
   - [License](#license)
  ## Installation
  ${answer.installation}
  ## Usage
  ${answer.usage}
  ## Credits
  ${answer.usage}
  ## How to Contribute
  ${answer.contributing}
  ## Tests
  ${answer.test}
  ## Questions
  
  ## License
  ${renderLicenseSection(answer.license)}
`;
}

export default generateMarkdown;
