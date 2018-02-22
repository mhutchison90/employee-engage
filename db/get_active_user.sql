-- SELECT * FROM employee
-- Where employeeid = $1;

SELECT *
FROM employee
JOIN users ON employee.email=users.email
where employeeid= $1; 
-- USE THIS LATER ONCE APP IS FURTHER ALONG