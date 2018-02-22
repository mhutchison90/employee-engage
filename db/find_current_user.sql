-- SELECT * FROM users 
-- WHERE id= $1;
SELECT *
FROM employee
INNER JOIN users ON employee.email=users.email
Where employeeid=309; --hardcoded Demo user id here
--Maybe not used?