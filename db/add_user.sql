INSERT INTO employee(
userrole, companyid, viewName, /*lastname, firstname, */  reportsto, email,	pointbalance, allowancebalance
)VALUES(
$1, $2, $3, $4, $5, $6, $7--, $8
)
RETURNING *;