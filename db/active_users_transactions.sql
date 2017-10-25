SELECT *
FROM transactions
INNER JOIN products ON transactions.productid=products.productid
where giver = $1;