update employee
set allowancebalance = allowancebalance - $3 
where employeeid = $1; --ACTIVE USER

update employee
set 	pointbalance = 	pointbalance + $3 
where employeeid = $2; --USER TO SEND POINTS TO

INSERT INTO transactions(
giver, reciever, orderdate, total, message
)VALUES(
$1, $2, CURRENT_DATE, $3, $4
);

-- $1 = Active User
-- $2 = User to send Points TO
-- $3 = Total Points Sent
-- $4 = Senders Message