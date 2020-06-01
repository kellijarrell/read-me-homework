const inquirer = require("inquirer");
const fs = require('fs');

inquirer
    .prompt([
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },

        {
            type: "input",
            name: "title",
            message: "What is the Project title?"
        },
        {
            type: "input",
            name: "description",
            message: "What is the Project description?"
        },
        {
            type: "input",
            name: "contents",
            message: "List the Table of Contents."
        },
        {
            type: "input",
            name: "installation",
            message: "List your installation."
        },
        {
            type: "input",
            name: "usage",
            message: "List your usage."
        },
        {
            type: "input",
            name: "license",
            message: "List your license info."
        },
        {
            type: "input",
            name: "contributing",
            message: "List your constributing factors/members."
        },
        {
            type: "input",
            name: "test",
            message: "List your tests."
        },
        {
            type: "input",
            name: "image",
            message: "Supply link to your GitHub picture"
        },
        {
            type: "input",
            name: "email",
            message: "What is your GitHub email?"
        }


    ]).then(function (data) {

        fs.writeFile("README.md", generateMD(data), function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("YAYYYA!");
        })

        function generateMD(data) {

            return `# Project Title: ${data.title}

![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

 ## Description:

            ${data.description}

 ## Table of Contents:

            ${data.contents}

 ## Installation:

            ${data.installation}

## Usage:

            ${data.usage}

## License:

            ${data.license}

## Contributing:

            ${data.contributing}

## Tests:

            ${data.test}

 ## GitHub info:

![User Profile Picture](${data.image})

## Email: 

            ${data.email}`
        };

    })

