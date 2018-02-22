UPDATE employee
SET 
userrole = 'employee',
lastname = 'User',
firstname = 'Demo',
reportsto= 1,
email= 'Demo@DemoEmail.com',
viewname = 'Demo User',
pointbalance = 1500,
allowancebalance = 1500
where employeeid = 309
;

UPDATE users
SET 
img = 'https://www.freevector.com/uploads/vector/preview/12675/FreeVector-Man-Vector-Avatar.jpg'
where id = 67
;