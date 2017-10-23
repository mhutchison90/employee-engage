SELECT *
FROM employee
INNER JOIN users ON employee.email=users.email;