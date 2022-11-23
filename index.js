const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { manQuery, empQuery } = require('./functions');
const { clear } = require('console');
let teamArray = []
let htmlCard = []

//Starts prompting questions from inquirer to build team
async function startTeam(){
    let managerData = await inquirer.prompt(manQuery)
    const {name, id, email, officeNumber} = managerData
    const managerInfo = new Manager(name, id, email, officeNumber)
    managerInfo.pos = teamArray.length
    teamArray.push(managerInfo)
    if (managerData.continue === true){
    runEmploy()
 }
}
// Runs when you select you want to add another person to the team
async function runEmploy(){
    let employeeData = await inquirer.prompt(empQuery)
    const {name, id, email, github, school} = employeeData
    if(employeeData.role === 'Engineer'){
        const employeeInfo = new Engineer(name, id, email, github)
        employeeInfo.pos = teamArray.length
        teamArray.push(employeeInfo)
        reRun(employeeData)
    }else{
        const employeeInfo = new Intern(name, id , email, school)
        employeeInfo.pos = teamArray.length
        teamArray.push(employeeInfo)
        reRun(employeeData)
    }
}
//Loops back through previous function
const reRun = (employeeData) => {
    if (employeeData.continue === true){
        runEmploy()

    }else{


        //Takes the array of team members and formats them into html ready content
function formatTeamCards(){
    teamArray.forEach(element => {
        let employeeRole = element.getRole()
       
        switch (employeeRole){
            case 'Manager':
            let manFormat = `<ul class = 'card'><li>Name: ${element.name}</li><li>Role: Manager</li><li>ID: ${element.id}</li><li>Email: <a href = "mailto: ${element.email}">${element.email}</a></li><li>Office Number: ${element.officeNumber}</li></ul>`
            htmlCard.push(manFormat);
            break;
            case 'Engineer':
                 let engFormat = `<ul class = 'card'><li>Name: ${element.name}</li><li>Role: Engineer</li><li>ID: ${element.id}</li><li>Email: <a href = "mailto: ${element.email}">${element.email}</a></li><li>Github: <a href = "https://github.com/${element.github}" target = "_blank">https://github.com/${element.github}</a></li></ul>`
                 htmlCard.push(engFormat);
            break;
            case 'Intern':
                 let intFormat = `<ul class = 'card'><li>Name: ${element.name}</li><li>Role: Intern</li><li>ID: ${element.id}</li><li>Email: <a href = "mailto: ${element.email}">${element.email}</a></li><li>School: ${element.school}</li></ul>`
                 htmlCard.push(intFormat);
            break;
        }
    })
    }

//Closes out loop, formats and posts html doc
        formatTeamCards()
        console.log(htmlCard);
        const formattedCard = htmlCard.toString()
        const clearedCard = formattedCard.split(',').join('')
        console.log(clearedCard);
        const htmlDoc = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="/pages/style.css">
            <title>Document</title>
        </head>
        <body>
            <nav>
                <h1>My Team</h1>
            </nav>
            <main>
                <div id="container">
                   ${clearedCard}
                </div>
            </main>
        </body>
        </html>`
        fs.writeFile('./pages/web.html', htmlDoc, (err) => {console.log(err);})
    }}



    startTeam()

