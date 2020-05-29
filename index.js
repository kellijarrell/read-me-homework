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


    ]).then(function(data) {

        var HTML=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.title}</title>
        </head>
        <body>


        <h1>${data.title}</h1>

        <h3>Description:</h3>
        <p>${data.description} </p>

        <h3>Table of Contents:</h3>
        <p>${data.contents} </p>

        <h3>Installation:</h3>
        <p>${data.installation} </p>

        <h3>Usage:</h3>
        <p>${data.usage} </p>

        <h3>License:</h3>
        <p>${data.license} </p>

        <h3>Contributing:</h3>
        <p>${data.contributing} </p>

        <h3>Tests:</h3>
        <p>${data.test} </p>

        <h3>GitHub info:</h3>
        <img src = "${data.image}">
        <p><strong>Email:</strong>${data.email}</p>

        </body>
        </html>`;

        fs.writeFile("README.md", HTML, function(err){

            if (err){
                return console.log(err);
            }

            console.log("YAYYYA!");
        })
    })