INSERT INTO transactions(
productid, giver, reciever, orderdate, total
)VALUES(
$1, $2, $3, CURRENT_DATE, $5
);