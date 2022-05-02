const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const dist_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(dist_DIR, "profileGenerator.html");

const teammates = [];

const promptsUser = (type) => {
  return inquirer.prompt(questions[type]);
};

const writeDist = (page) => {
  if (!fs.existsSync(dist_DIR)) {
    fs.mkdirSync(dist_DIR);
  }
  fs.writeFileSync(distPath, page);
  console.log("Here's your team profile!");
};

const questions = () => {
  return promptsUser("newEmp").then((answer) => {
    if (answer.role === "Engineer") {
      promptsUser("engineer")
        .then((emp) => {
          const newEmployee = new Engineer(
            emp.name,
            emp.id,
            emp.email,
            emp.github
          );
          teammates.push(newEmployee);
          containers.ids.push(emp.id);
          questions();
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (answer.role === "Intern") {
      promptsUser("intern")
        .then((emp) => {
          const newEmployee = new Intern(
            emp.name,
            emp.id,
            emp.email,
            emp.school
          );
          teammates.push(newEmployee);
          containers.ids.push(emp.id);
          questions();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Thanks for adding a new teammate!");
      const Page = render(teammates);
      writeDist(Page);
    }
  });
};

const buildTeam = () => {
  return promptsUser("manager")
    .then((emp) => {
      const newEmployee = new Manager(
        emp.name,
        emp.id,
        emp.email,
        emp.officeNumber
      );
      teammates.push(newEmployee);
      containers.ids.push(emp.id);
      questions();
    })
    .catch((err) => {
      console.log(err);
    });
};

buildTeam();

/*Create an array of questions for team manager user input
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
*/
