//dependencies //
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee.js')
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

//Create an array of questions for team manager user input
function getManager() {
inquirer.prompt ([
{
    type: "input",
    name: "teamManagersName",
    message: "What is the name of this team manager?",
    validate: teamManagersNameInput => {
    if (teamManagersNameInput) {
        return true;
      } else {
        console.log('Please enter the name of this team manager.');
        return false;
      }
    }
  },{
    type: "number",
    name: "teamManagersId",
    message: "What is the team manager's ID?",
    validate: teamManagersIdInput => {
        if (teamManagersIdInput >0) {
            return true;
          } else {
            console.log('Please enter the ID for this team manager.');
            return false;
          }
        }
    },{
        type: "input",
        name: "teamManagersEmail",
        message: "What is the email address for this team manager?",
        validate: teamManagersEmailInput => {
            if (teamManagersEmailInput) {
                return true;
              } else {
                console.log('Please enter a valid email address for this team manager.');
                return false;
              }
            }
          },{
        type: "number",
        name: "teamManagersOfficeNumber",
        message: "What is the team manager's office number?",
        validate: teamManagersOfficeNumberInput => {
            if (teamManagersOfficeNumberInput) {
                 return true;
                  } else {
                    console.log('Please enter a valid office number to proceed.');
                    return false;
                  }
                }
            ])
            .then(answers) => {
                const manager = new manager(answers.teamManagersName, answers.teamManagersId, answers.teamManagersEmail, answers.teamManagersOfficeNumber);
                team.push(Manager);
                addTeam();
            });
        };

        //Add a Team//
        function addTeam () {
            inquirer.prompt([{
                type: 'list',
                name: 'teamMemberRole',
                message: 'Would you like to add a team member (Engineer or Intern) or not?'
        }])
.then(chosen => {
switch (chosen => {
    switch (chosen.teamMemberRole) {
        case 'Engineer':
            addEngineer();
            break;
        case 'Intern':
            addIntern();
            break;
        case 'No':
            buildTeam();
            break;
    }
});
};

//Add an Engineer
function addEngineer() {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Please enter the name of the Engineer you would like to add.',
            validate: answer => {
                if (answer === ""){
                    console.log('Whoops! Looks like you forgot to enter the Engineer you would like to add.');
                    return false;
                }
                return true;
            }
        }
    ])
}
//Add an Intern
