DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;

CREATE TABLE department (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL ,
  department_id INT NOT NULL,
  -- FOREIGN KEY (department)
  -- REFERENCES department(id)
  -- ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL AUTO_INCREMENT,
  manager_id VARCHAR(30),
  FOREIGN KEY (department)
  REFERENCES department(id)
  ON DELETE SET NULL
);