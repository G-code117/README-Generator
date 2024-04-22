// TODO: Include packages needed for this application
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("generateMarkdown");
const { type } = require("os");



// TODO: Create an array of questions for user input
const READMEPrompt = [
    {
        type: "input",
        name: "email",
        message: "enter email"
    },
    {
        type: "input",
        name: "title",
        message: "project name"
    },
    {
        type: "input",
        name: "description",
        message: "describe the project"
    },
    {
        type: "list",
        name: "license",
        message: "licensing of the project",
        choices: ["Apache","GNU","MIT","BSD 2","BSD 3"]
    },
    {
        type: "input",
        name: "installation",
        message: "installations needed for dependencies"
    },
    {
        type: "input",
        name: "test",
        message: "tests needed to run command"
    },
    {
        type: "input",
        name: "usage",
        message: "how does the user need the repo?"
    },
    {
        type: "input",
        name: "contributors",
        message: "how can the user contribute to the repo"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}
    
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(READMEPrompt).then((inquirerResponses) => {
        console.log("Generating README....");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}))
    })
}

// Function call to initialize app
init();
