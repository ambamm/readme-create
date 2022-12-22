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
      name: 'Usage',
      message: 'How do you efficiently use this app?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license from the list below:',
      choices: ['MIT', 'Apache', 'GNU'],
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who are the contributors of the project?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What tests were performed on the app?',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github username',
    },
    {
      type: 'input',
      name: 'Email',
      message: 'What is your email?',
    },
    
  ])