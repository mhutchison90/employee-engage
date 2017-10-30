UPDATE employee
SET userrole=$2, 	companyid=$3, 	lastname=$4, 	firstname=$5, 	reportsto=$6, 	email=$7, 	pointbalance=$8, allowancebalance=$9
where employeeid = $1
;

UPDATE users
SET img=$10
where email = $7
;
