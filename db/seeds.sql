INSERT INTO departments (id, name)
VALUES ("Hematology"),
       ("Chemistry"),
       ("Urinalysis"),
       ("Cytology");

INSERT INTO roles (id, title, salary, departments_id)
VALUES (1, "Technician", 30000, 1),
       (4, "Technologist", 35000, 2),
       (2, "Lead", 40000, 3),
       (3, "Trainer", 45000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Keanu", "Reeves", 1, 1),
       (3, "Carrie-Anne", "Moss", 2, 2),
       (2, "Laurence", "Fishburne", 3, 3),
       (4, "Hugo", "Weaving", 4, 4);

