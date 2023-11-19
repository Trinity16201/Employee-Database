SELECT *
FROM roles, employees
JOIN departments ON roles.departments_id = departments.id;
JOIN roles ON employees.role_id = roles.id;