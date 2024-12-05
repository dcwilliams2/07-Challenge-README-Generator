// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
import questions from "../index.js";
import licenses from "../license.js";

function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `![Static Badge](https://img.shields.io/badge/license-${answer.license}-green)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  } else {
    const licenseLink = license.find((license) => license.link === link);
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  } else {
    return `Licensed under [${answer.license}](${licenseLink}) license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ${renderLicenseBadge}
  ## Description
  ${answer.description}
  ## Table of Contents
   - [Installation](#installation)
   - [Usage](#usage)
   - [Credits](#credits)
   - [How to Contribute](#howtocontribute)
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
  Please send any questions [Here](mailto:${answer.email}) or visit GitHub [Here](https://github.com/${answer.username}).
  ## License
  ${renderLicenseSection}
`;
}

export default generateMarkdown;
