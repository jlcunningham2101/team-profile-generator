//dependencies needed//
const inquirer = require('inquirer');
const fs = require('fs');

const employee = require('./lib/employee.js')
const engineer = require('./lib/engineer.js');
const intern = require('./lib/intern.js');
const manager = require('./lib/manager.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
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
                console.log('Please enter the email address of this team manager.');
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
                    console.log('Please enter the description of your application!');
                    return false;
                  }
                }
            }
        ]);
    };
