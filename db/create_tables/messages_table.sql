CREATE TABLE messages (
    messageid SERIAL PRIMARY KEY,
    message VARCHAR(160),
    employeeid INT,
    transactionid INT,
    FOREIGN KEY (employeeid) REFERENCES employee(employeeid),
    FOREIGN KEY (transactionid) REFERENCES transactions(transactionid)
);