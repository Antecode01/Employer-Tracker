const express = require("express");
const mysql = require("mysql");
const inquirer = require("inquirer");
const app = express();
//create server port
const PORT = process.env.PORT || 4000;
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "761456",
  database: "employees_db",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("connection as id " + connection.threadId + "\n");
  tracker();
});

function tracker() {
  inquirer
    .prompt({
      name: "would",
      type: "list",
      message: "what would you like to do?",
      choices: [
        "Add Department",
        "Add Roles",
        "Add Employees",
        "Remove Department",
        "Remove Employee",
        "View Departments",
        "View Roles",
        "View Employees",
        "Update Employee Roles",
      ],
    })
    .then(function (answer) {
      if (answer.would === "Add Department") {
        addDepartments();
      } else if (answer.would === "Add Roles") {
        addRoles();
      } else if (answer.would === "Remove Department") {
        removeDepartment();
      } else if (answer.would === "Remove Employee") {
        removeEmployee();
      } else if (answer.would === "Add Employees") {
        addEmployees();
      } else if (answer.would === "View Departments") {
        viewDepartments();
      } else if (answer.would === "View Roles") {
        viewRoles();
      } else if (answer.would === "View Employees") {
        ViewEmployees();
      } else if (answer.would === "Update Employee Roles") {
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
        "INSERT INTO department SET ?",
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

function addRoles() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: "what roles would you like to add?",
      },
      {
        name: "salary",
        type: "input",
        message: "salary for the role?",
      },
      {
        name: "deptid",
        type: "input",
        message: "the department id?",
      },
    ])
    .then(function (answer) {
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.deptid,
        },
        function (error) {
          if (error) throw error;
          tracker();
        }
      );
    });
}

function addEmployees() {
  inquirer
    .prompt([
      {
        name: "first_name",
        type: "input",
        message: "what is the first name?",
      },
      {
        name: "last_name",
        type: "input",
        message: "what is the last name?",
      },
      {
        name: "role_id",
        type: "input",
        message: "what is the role id?",
      },
      {
        name: "manager_id",
        type: "input",
        message: "what is the manager id?",
      },
    ])

    .then(function (answer) {
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          roles_id: answer.role_id,
          manager_id: answer.manager_id,
        },
        function (error) {
          if (error) throw error;
          tracker();
        }
      );
    });
}

function removeDepartment() {
  inquirer
    .prompt({
      type: "input",
      message: "What department do you want to remove?",
      name: "name",
    })
    .then((answer) => {
      connection.query(
        "DELETE FROM departments WHERE ?",
        { name: answer.name },
        (err, res) => {
          if (err) throw err;
          console.table((res.affectedRows = "Department Removed!"));
          tracker();
        }
      );
    });
}
function removeEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their first name?",
        name: "first_name",
      },
      {
        type: "input",
        message: "What is their last name?",
        name: "last_name",
      },
      {
        type: "input",
        message: "What is their role id?",
        name: "role_id",
      },
    ])
    .then((answer) => {
      connection.query(
        "DELETE FROM employees WHERE id = 5",
        {
          first_name: answer.first_name,
          last_name: answer.last_name,
          role_id: answer.role_id,
        },
        (err, res) => {
          if (err) throw err;
          console.table(res.affectedRows + "Employee Removed!");
          tracker();
        }
      );
    });
}

function viewDepartments() {
  connection.query("SELECT * FROM department", function (error, result) {
    if (error) throw error;
    console.table(result);
    tracker();
  });
}

function viewRoles() {
  connection.query("SELECT * FROM roles", function (error, result) {
    if (error) throw error;
    console.table(result);
    tracker();
  });
}

function ViewEmployees() {
  connection.query("SELECT * FROM employee", function (error, result) {
    if (error) throw error;
    console.table(result);
    tracker();
  });
}

function updateEmployeeRoles() {
  console.log("inside update employee role");

  inquirer
    .prompt([
      {
        type: "input",
        message: "What is their new role id?",
        name: "role_id",
      },
      {
        type: "input",
        message: "What is the employee's  id ",
        name: "id",
      },
    ])
    .then((answer) => {
      connection.query(
        "UPDATE employee SET ? WHERE ?",
        [
          {
            roles_id: answer.role_id,
          },
          {
            id: answer.id,
          },
        ],
        (err, res) => {
          if (err) throw err;
          console.table(res.affectedRows + "Employee Role Updated");
          tracker();
        }
      );
    });
}

app.listen(PORT, (err, data) => {
  if (err) throw err;
  console.log("I'm listening on port:" + PORT);
});
