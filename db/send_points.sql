update employee
set allowancebalance = allowancebalance - $3 
where employeeid = $1; --ACTIVE USER

update employee
set 	pointbalance = 	pointbalance + $3 
where employeeid = $2; --USER TO SEND POINTS TO

INSERT INTO transactions(
giver, reciever, total, message, timestamp
)VALUES(
$1, $2, $3, $4, $5
);

-- $1 = Active User
-- $2 = User to send Points TO
-- $3 = Total Points Sent
-- $4 = Senders Message