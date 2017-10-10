CREATE TABLE Transactions (
TransactionId SERIAL PRIMARY KEY,
ProductId INT,
Giver INT,
Reciever INT,
OrderDate DATE,
Total INT,
FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);