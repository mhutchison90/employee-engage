UPDATE employee
SET lastname=$2, 	firstname=$3, viewname= $4
where employeeid = $1
;

UPDATE users
SET img=$6
where email = $5
;

