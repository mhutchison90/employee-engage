CREATE TABLE Employee (
EmployeeId SERIAL PRIMARY KEY,
UserRole VARCHAR(30),
CompanyId INT,
LastName VARCHAR(120),
FirstName VARCHAR(120),
ReportsTo INT,
Email VARCHAR(120), 
PointBalance INT,
AllowanceBalance INT,
FOREIGN KEY (CompanyId) REFERENCES Company(CompanyId)
);