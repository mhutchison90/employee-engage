SELECT *
FROM transactions
INNER JOIN products ON transactions.productid=products.productid
where giver = 309; --hardcoded Demo user id here