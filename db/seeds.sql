INSERT INTO departments (name)
VALUES ("Hematology"),
       ("Chemistry"),
       ("Urinalysis"),
       ("Cytology");

INSERT INTO roles (title, salary, department_id)
VALUES ("Technician", 30000, 1),
       ("Technologist", 35000, 2),
       ("Lead", 40000, 3),
       ("Trainer", 45000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Keanu", "Reeves", 1, 1),
       ("Carrie-Anne", "Moss", 2, 2),
       ("Laurence", "Fishburne", 3, 3),
       ("Hugo", "Weaving", 4, 4);

