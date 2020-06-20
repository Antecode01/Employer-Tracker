var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "761456",
  database: "employees_db",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected to the server");
  tracker();
});
function tracker() {
  inquirer
    .prompt({
      name: "would",
      type: "list",
      message: "what would you like to do?",
      choices: ["Add departments", "View departments", "Update employee roles"],
    })
    .then(function (answer) {
      if (answer.would === "Add departments") {
        addDepartments();
      } else if (answer.would === "View departments") {
        viewDepartments();
      } else if (answer.would === "update employee roles") {
        updateEmployeeRoles();
      } else {
        connection.end();
      }
    });
}
function addDepartments() {
  inquirer
    .prompt([
      {
        name: "department",
        type: "input",
        message: "what department you want to add?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO departments SET ?",
        {
          name: answer.department,
        },
        function (error) {
          if (error) throw error;
          tracker();
        }
      );
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM departments", function (error, result) {
    if (error) throw error;
    console.table(result);
    tracker();
  });
}
