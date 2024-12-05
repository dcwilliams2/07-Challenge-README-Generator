// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// badge: "![MIT License](https://img.shields.io/badge/license-MIT-green)",

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
   - [License](#license)
  ## Installation
  ## Usage
  ## Credits
  ## How to Contribute
  ## Tests
  ## License
`;
}

export default generateMarkdown;
