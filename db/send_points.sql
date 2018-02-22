update employee
set allowancebalance = allowancebalance - $3 
where employeeid = 309; --ACTIVE USER  --hardcoded Demo user id here

update employee
set 	pointbalance = 	pointbalance + $3 
where employeeid = $2; --USER TO SEND POINTS TO

INSERT INTO transactions(
giver, reciever, total, message, timestamp
)VALUES(
309, $2, $3, $4, $5  --hardcoded Demo user id here
);

-- $1 = Active User
-- $2 = User to send Points TO
-- $3 = Total Points Sent
-- $4 = Senders Message