

// function init(){

const inquirer = require("inquirer");
const fs = require("fs");


function prompt() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the describtion of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies? ",
    },
    {
      type: "input",
      name: "usage",
      message: "How to use the application?",
    },
    {
      type: "input",
      name: "contribution",
      message: "What is the contribution guidelines?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be used to run the test?",
    },
    {
      type: "input",
      name: " license",
      message: "What license year?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your gitub userName?",
    },
    // {
    //   type: "input",
    //   name: "question",
    //   message: "For any question contact me on Github",
    // },
    {
      type: "input",
      name: "email",
      message: "what is your email addrress if I want to conatct you",
    },
  ]);
}
function generateREADME({
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  question,
  email,
}) {
  let ReadMe = `
  #  ${title} [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents:
  1. Descriptions
  2. Installation
  3. Usage
  4. Contribution
  5. Test
  6. License
  7. Github
  8.Question
  9. Eamil

  ## Description 

  ${description}

  ## Installation 

  To run the program, use the command ${installation} to install all dependencies.

  ## Usage 

  ${usage}

  ## Contibution

  ${contribution}

  ## Test

  ${test}

  ## License
  MIT License
  Copyright ${license} Bakary Sylla

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  

  ## Github

  For Any question or request you can to on my [Github](https://github.com/${github})

  ## Question
   ${question}

   ## Email

   For any question, you can eamil at : 
   [email](mailto:{${email}}
  `;

  return ReadMe;
}

function WriteReadmeFile(ReadMe) {
  fs.writeFileSync(`./Readme/readme.md`, ReadMe);
}
async function init() {
  let answers = await prompt();
  let genREADME = generateREADME(answers);
  WriteReadmeFile(genREADME);
}

init();
