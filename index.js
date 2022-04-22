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
  * Description: ${description}
  * Installation: ${installation}
  * Usage : ${usage}
  * Contibution : ${contribution}
  * Test:${test}
  * Question ${question}
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
