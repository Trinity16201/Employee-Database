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
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
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
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}

function viewAllRoles() {
    const rolesQuery = "SELECT roles.title, roles.salary, roles.department_id, FROM roles JOIN departments on roles.department_id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function viewAllEmployees() {
    const employeeQuery = "SELECT employees.first_name, employees.last_name, employees.role_id, employees.manager_id";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function addARole() {
    const addRoleQuery =
        inquirer
            .prompt({
                type: "input",
                name: "addRole",
            })
            .prompt({
                type: "input",
                name: "add_Salary",
                message: "Enter the Salary for this new role"
            })
            .prompt({
                type: "input",
                name: "department_id",
                message: "Insert the department id",
            })
            .then((answer) => {
                console.log(answer.addRole);
                const query = `INSERT INTO roles(title) VALUES ("${answer.addRole}") INSERT INTO roles(salary) VALUES ("${answer.add_Salary}") INSERT INTO roles()epartment_id VALUES ("${answer.department_id}")`; 
            })
connection.query(query, (err, res) => {
    if (err) throw err;
    console.table(res);
    start();
})
}
function addEmployee() {
    const addEmployeeQuery = 
    inquirer
    .prompt({
        type: "input",
        name: "firstname",
        message: "Please enter the first name of the new employee."
    })
    .prompt({
        type: "input",
        name: "lastname",
        message: "Please enter the last name of the new employee."
    })
    .prompt({
        type: "input",
        name: "role_id",
        message: "Please enter the role id."
    })
    .prompt({
        type: "input",
        name: "manager id",
        message: "Please enter the manager id. Example: Frontline"
    })
    

    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
function updateEmployeeRole() {
    const updateEmployeeRoleQuery = "SELECT ";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    })
}
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
