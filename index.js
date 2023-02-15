// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
  {
    // ------ this is the prompt for enetering the Title of your project-----//
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? '
   
  },
  // ------ this is the prompt for enetering the Description of your project-----//
  {
    type: 'input',
    name: 'Description',
    message: 'Describe your project'
    
  },
  // ------ this is the prompt for enetering the Istallation of your project-----//
  
  {
    type: 'input',
    name: 'Installation',
    message: 'how will your app be installed?',
  },
  // ------ this is the prompt for enetering the Usage of your project-----//
  {
    type: 'input',
    name: 'Usage',
    message: 'How will your app be used?',
 
  },
  // ------ this is the prompt for enetering the constribution guidelines of your project-----//
  {
    type: 'input',
    name: 'Contributing',
    message: 'Enter your apps contribution guidelines',
  },
  // ------ this is the prompt for entering how to testyour project-----//
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide instructions on how to test the app',
 
  },

// ------This is the section in which you select which License you would like to use in your project

  {
    type: 'list',
    name: 'license',
    message: 'Which license will you use for your project?',
    choices: ['Miami', 'School of Hard Knocks', 'Harvard', 'no license']
  },

  {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub Username?',
  
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
 
  },
]

function createfile(fileName, data){
  return fs.writeFile(fileName, data, (err) => 
    err ? console.log(err) : console.log('Successfully created index.html!'))
}

// TODO: Create a function to initialize app
const init = () => {
  console.log('line 140')
  

  inquirer.prompt(questions).then(response => {
    console.log('Read Me Generator');
   createfile('ReadMe.md',generateMarkdown(response)) 
  })

  }
    // .then(readmeData => {
    //   console.log('test')

  // const htmlPageContent = (readmeData);

  


// Function call to initialize app
init()

  // .then(readmeData => {
  // //   console.log(readmeData);
  // //   return generateMarkdown(readmeData);
  // // })
  // // // .then(writeFileResponse => {
  // // //   console.log(writeFileResponse.message);
  // // // })
  // // .catch(err => {
  // //   console.log(err);
  // // })
