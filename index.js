const inquirer = require('inquirer');
const fs = require('fs');
// const {url} = require('inspec(tor');
const path = require('path')
const  generateMarkDown = require('./utils/generatemarkDown')
//ask all the questions using the inquire toolbox/prompt

//from there, we have thr gigantic string of text that we need to get onto the readme

const questions = [  //the input the user will be providing. npm doc is the tool box and these properties are our tools
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
      message: 'what command should be used to install dependencies?',
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
      choices: ['MIT', 'Apache', 'GNU', 'None'],
    },
    {
      type: 'input',
      name: 'Contributors',
      message: 'Who are the contributors of the project?',
    },
    {
      type: 'input',
      name: 'Test',
      message: 'What command should be used to run tests?',
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
    
  ]
//taking in 2 para
  function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join (process.cwd(),fileName), data)  //what data to include. Return generates the file system 
    //the fun is "write2file"
    //2 params, fileName and data,<- data is what we're naming it
    //want to return the writefilesync function and join in the current workin directory, wt=uth the filename and the data
  }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt (questions).then((inquirerResponses) => {
    console.log('generating your readMe')
    writeToFile('readMe.md', generateMarkDown({...inquirerResponses}))
  })
}

// Function call to initialize app
init();