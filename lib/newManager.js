const managerData = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the Manager?",
    validate: (managerNameInput) => {
      if (managerNameInput) {
        return true;
      } else {
        console.log("Please enter the name of the Manager");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "id",
    message: "What is the ID of the Manager?",
    validate: (managerIdInput) => {
      if (managerIdInput) {
        return true;
      } else {
        console.log("Please enter the ID of the Manager!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is the email address of the Manager?",
    validate: (managerEmailInput) => {
      if (managerEmailInput) {
        return true;
      } else {
        console.log("Please enter the email address of the Manager!");
        return false;
      }
    },
  },
  {
    type: "number",
    name: "office",
    message: "What is the office number of the Manager?",
    validate: (managerOfficeInput) => {
      if (managerOfficeInput) {
        return true;
      } else {
        console.log("Please enter the office number of the manager");
        return false;
      }
    },
  },
];

module.exports = managerData;
