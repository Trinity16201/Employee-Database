const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Matrix04!",
  database: "tracker_db",
});

connection.connect(function (error) {
  if (error) throw error;
  start();
});
// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
function start() {
  inquirer
    .prompt({
      type: "list",
      name: "selections",
      message: "What would you like to do?",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add Employee",
        "Update an employee role",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.selections) {
        case "View all departments":
          viewAllDepartments();
          break;
        case "View all roles":
          viewAllRoles();
          break;
        case "View all employees":
          viewAllEmployees();
          break;
        case "Add a department":
          addADepartment();
          break;
        case "Add a role":
          addARole();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Update an employee role":
          updateEmployeeRole();
          break;
        case "Exit":
          connection.end();
          console.log("Goodbye and have a nice day!");
          break;
      }
    });
}

function viewAllDepartments() {
  const deptQuery = "SELECT * FROM departments";
  connection.query(deptQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function viewAllRoles() {
  const rolesQuery = "SELECT * FROM roles";
  connection.query(rolesQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}
function viewAllEmployees() {
  const employeeQuery = "SELECT * FROM employees";
  connection.query(employeeQuery, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
  });
}

function addADepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What is the name of the department?",
      },
    ])
    .then((answer) => {
      const insertDept = `INSERT INTO departments(name) VALUES ('${answer.addDepartment}');`;
      connection.query(insertDept, (err, res) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Added " + answer.addDepartment + " to the database.");
        start();
      });
    });
}
function addARole() {
  const sql2 = "SELECT * FROM departments";
  connection.query(sql2, (err, res) => {
    departmentList = response.map((departments) => ({
      name: departments.name,
      value: departments.id,
    }));
    return inquirer.prompt([
        {
          type: "input",
          name: "title",
          message: "What is the name of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "What is the salary of this role?",
        },
        {
          type: "input",
          name: "department",
          message: "Which deparment will this role be in?",
          choices: departmentList,
        },
      ]).then((answer) => {
        const insertRole = `INSERT INTO roles SET title = ('${answer.title}', salary = ${answer.salary}, departments_id = ${answer.departments});`;
        connection.query(insertRole, (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Added " + answer.title + " to the database.");
          start();
        });
      });
  });
}
function addEmployee() {
  const addEmployeeQuery = inquirer
    .prompt({
      type: "input",
      name: "firstname",
      message: "Please enter the first name of the new employee.",
    })
    .prompt({
      type: "input",
      name: "lastname",
      message: "Please enter the last name of the new employee.",
    })
    .prompt({
      type: "input",
      name: "role_id",
      message: "Please enter the role id.",
    })
    .prompt({
      type: "input",
      name: "manager id",
      message: "Please enter the manager id. Example: Frontline",
    });

  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    addEmployeeQuery();
  });
}
function updateEmployeeRole() {
  const updateEmployeeRoleQuery = "SELECT ";
  connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    updateEmployeeRoleQuery();
  });
}
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
