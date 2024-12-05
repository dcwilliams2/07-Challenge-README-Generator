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
  ${answer.mediaLinks}
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
