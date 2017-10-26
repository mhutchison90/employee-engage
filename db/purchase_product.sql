update employee
set pointbalance = 	pointbalance - $3 
where employeeid = $2; 

update Products
set inventory = inventory - 1 
where productid = $1;
-- RETURNING *; 

INSERT INTO transactions(
productid, giver, total, timestamp
)VALUES(
$1, $2, $3, (CURRENT_TIMESTAMP-7:00)
);

-- select * from products;

--$1 = Product ID
-- $2 = Active User
-- $3 = Total Points Spent	