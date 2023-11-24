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
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of this new role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is salary?",
      },
      {
        type: "input",
        name: "department",
        message: "What is the department id? (Please choose option 1-4)",
      },
    ])
    .then((answer) => {
      const insertRole = "INSERT INTO roles SET ?";
      connection.query(
        insertRole,
        {
          title: answer.title,
          salary: answer.salary,
          department_id: answer.department,
        },
        (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Added " + answer.title + " to the database.");
          start();
        }
      );
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstname",
        message: "Please enter the first name of the new employee.",
      },
      {
        type: "input",
        name: "lastname",
        message: "Please enter the last name of the new employee.",
      },
      {
        type: "input",
        name: "role",
        message: "Please enter the role id as a number. Choose between 1-4.",
      },
      {
        type: "input",
        name: "manager",
        message: "Please enter the manager id as a number. Choose between 1-4.",
      },
    ])
    .then((answer) => {
      const insertEmployee = "INSERT INTO employees SET ?";
      connection.query(
        insertEmployee,
        {
          first_name: answer.firstname,
          last_name: answer.lastname,
          role_id: answer.role,
          manager_id: answer.manager,
        },
        (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Added " + answer.firstname + " to the database.");
          start();
        }
      );
    });
}
function updateEmployeeRole() {
    const employeeList = "SELECT * FROM employees";
    connection.query(employeeList, (err, res) => {
        employeeList = response.map(employees => ({
            name: employees.first_name.concat(" ", employees.last_name),
            value: employees.id
        }));
    })
    return inquirer
    .prompt([
      {
        type: "list",
        name: "employeeChoice",
        message: "Which employee would you like to change their role to?",
        choices: employeeList
      },
      {
        type: "input",
        name: "roleUpdate",
        message: "What role would you like to update this employee to? (Choose 1-4)",
      },
    ]).then((answer) => {
        const updateEmployee = `UPDATE employee SET role_id= ${answer.roleUpdate}`;
        connection.query(
            updateEmployee,
        (err, res) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("Updated employee in the database.");
          start();
        }
        );
    });
}
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
