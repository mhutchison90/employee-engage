SELECT 
sender.viewname as sender, 
sender.employeeid as senderid,
employee.viewname as reciever,
employee.employeeid as recieverid, 
total, timestamp, 
transactions.message,
transactions.transactionid,
users.img

FROM transactions 
JOIN employee ON transactions.reciever = employee.employeeid 
join employee as sender on transactions.giver = sender.employeeid
JOIN users ON employee.email = users.email 
where employee.employeeid = 309
order by transactionid desc
;