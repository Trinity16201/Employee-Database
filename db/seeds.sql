INSERT INTO departments (name)
VALUES ("Hematology"),
       ("Chemistry"),
       ("Urinalysis"),
       ("Cytology");

INSERT INTO roles (title, salary, department_id)
VALUES ("Technician", 30000, 1),
       ("Technologist", 35000, 1),
       ("Lead", 40000, 2),
       ("Trainer", 45000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("Keanu", "Reeves", 1, "Frontline"),
       ("Carrie-Anne", "Moss", 1, "Frontline"),
       ("Laurence", "Fishburne", 2, "Support"),
       ("Hugo", "Weaving", 3, "Temp");

