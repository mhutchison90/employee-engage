update employee
set pointbalance = 	pointbalance - $3 
where employeeid = $2; 

update Products
set inventory = inventory - 1 
where productid = $1; 

INSERT INTO transactions(
productid, giver, orderdate, total
)VALUES(
$1, $2, CURRENT_DATE, $3
);

--$1 = Product ID
-- $2 = Active User
-- $3 = Total Points Spent	