
CREATE TABLE Products (
ProductId SERIAL PRIMARY KEY,
CompanyId INT,
ProductName VARCHAR(140),
ImageURL VARCHAR(140),
ProductDescription VARCHAR(120),
CostPrice INT,
SalePrice INT,
Inventory INT,
Category TEXT,
FOREIGN KEY (CompanyId) REFERENCES Company(CompanyId)
);