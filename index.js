const inquirer = require("inquirer");
const fs = require("fs");

// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "title",
//       message: "What is your project title?",
//     },
//     {
//       type: "input",
//       name: "description",
//       message: "describe your project?",
//     },
//     {
//       type: "input",
//       name: "installation",
//       message: "Installation Instruction? ",
//     },
//     {
//       type: "input",
//       name: "usage",
//       message: "How to use the application?",
//     },
//     {
//       type: "input",
//       name: "contribution",
//       message: "What is the contribution guidelines?",
//     },
//     {
//       type: "input",
//       name: "test",
//       message: "What is the instruction for the test?",
//     },
//   ])
//   .then(function ({
//     title,
//     description,
//     installation,
//     usage,
//     contribution,
//     test,
//   }) {
//     // console.log(title, description, installation, usage, contribution, test);

//     let generateREADME = `
//     <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Readme Generator</title>
//     <link rel="stylesheet" href="./style.css" />
//   </head>
//   <body>
//     <h1>Project : ${title}</h1>
//     <section>
//       <div>
//         <h3>## Project description</h3>
//         <p>${description}</p>

//         <h3>## Installation instructions</h3>
//         <p>${installation}</p>

//         <h3>## Usage information</h3>
//         <p>${usage}</p>

//         <h3>## Contribution guidelines</h3>
//         <p>${contribution}</p>

//         <h3>## Test instructions</h3>
//         <p>${test}</p>
//       </div>
//     </section>
//   </body>
// </html>

//     `;
//     console.log(generateREADME);

//     fs.writeFileSync(`./Readme/${title}.html`, generateREADME);
//   });

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
      message: "describe your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "Installation Instruction? ",
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
      message: "What is the instruction for the test?",
    },
    {
      type: "input",
      name: " license",
      message: "What license do you use? it can be your initaill (i.e...BS)",
    },
    {
      type: "input",
      name: "github",
      message: "What is your gitub userName",
    },
    {
      type: "input",
      name: "question",
      message: "For any question contact me on Github",
    },
    {
      type: "input",
      name: "email",
      message: "what is your email addrress",
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
  # https://github.com/${github} /${license} / ${title} 
  * ${description}
  * ${installation}
  * ${usage}
  * ${contribution}
  * ${test}
  * ${question}
  * For any question, you can eamil at :${email}
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
