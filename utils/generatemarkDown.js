// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None'){
        return `![licenseBadge](https://img.shields.io/badge/License-${license}-green)`
    }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None'){
        return `* [License](#license)`
    }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None'){
        return `## License
        
This project is licensed under the ${license} license.`
    }
    return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Name}
${renderLicenseBadge(data.license)}

## Description 

${data.Description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

${renderLicenseLink(data.license)}

* [Contributors](#contributors)

* [Test](#test)

* [Questions](#questions)

## Installation 

To install necessary dependencies, run the following command: 

\`\`\`
${data.Installation}
\`\`\`

## Usage 

${data.Usage}

${renderLicenseSection(data.license)}

## Contributors

${data.Contributors}

## Test

To run tests, run the following command: 

\`\`\`
${data.Test}
\`\`\`

## Questions

If you have any questions about this project, contact me directly at ${data.Email}. You can find more of my work at [${data.Github}](https://github.com/${data.Github}/)

`;


}

module.exports = generateMarkdown;
