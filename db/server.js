const inquirer = require("inquirer");
const mysql = require("mysql2")

const PORT = process.env.PORT || 3001;
const app = express();

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: 'Matrix04!',
    database: 'department_db'
})
function start() {
    inquirer
        .createPromptModule({
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
                "Update an employee role"
            ]
        })
        .then((answer) => {
            switch (answer.action) {
                case "View all departments":
                    viewAllDepartments();
                    break;
                case "View all roles":
                    viewAllRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
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
        })

}

function viewAllDepartments() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewAllRoles() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function viewAllEmployees() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function addARole() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function addEmployee() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function updateEmployeeRole() {
    const deptQuery = "SELECT * FROM departments";
    connection.query(query, (err,res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
