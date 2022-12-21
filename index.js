const inquirer = require('inquirer');
const fs = require('fs');
const {url} = require('inspector');

//ask all the questions using the inquire toolbox/prompt

//from there, we have thr gigantic string of text that we need to get onto the readme

inquirer
  .prompt([
    {
      type: 'input',
      name: 'Name',
      message: 'What is the name of your application?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'What was your motivation for this application?',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Please provide a short installation guide',
    },
    {
      type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])