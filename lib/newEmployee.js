const employeeQuestions = [
  {
    type: "list",
    name: "currentRole",
    message: "Are you adding an Engineer or Intern?",
    choices: ["Engineer", "Intern"],
  },
  {
    type: "input",
    name: "name",
    message: "Please enter the name of your new employee",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter the name of your new employee");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "id",
    message: "What is the ID number of your employee?",
    validate: (engineerIdInput) => {
      if (engineerIdInput) {
        return true;
      } else {
        console.log("Please enter the ID of the employee!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of this employee?",
    validate: (engineerEmailInput) => {
      if (engineerEmailInput) {
        return true;
      } else {
        console.log("Please enter the email address of the employee!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is the Github username of the employee?",
    when: (role) => role.currentRole === "Engineer",
    validate: (engineerGithubInput) => {
      if (engineerGithubInput) {
        return true;
      } else {
        console.log("Please enter the github username of the employee!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: "What school does the intern attend?",
    when: (role) => role.currentRole === "Intern",
    validate: (schoolInput) => {
      if (schoolInput) {
        return true;
      } else {
        console.log("Please enter the school of the intern!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "confirmAdd",
    message: "Do you want to add another employee?",
    default: false,
  },
];

module.exports = employeeQuestions;
