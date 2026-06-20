SELECT USER FROM DUAL;
CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    LastModified DATE
);
CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER,
    LastModified DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    Position VARCHAR2(50),
    Salary NUMBER,
    Department VARCHAR2(50),
    HireDate DATE
);
INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1985-05-15','YYYY-MM-DD'),
    1000,
    SYSDATE
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    1500,
    SYSDATE
);

COMMIT;
INSERT INTO Accounts
VALUES (
    1,
    1,
    'Savings',
    1000,
    SYSDATE
);

INSERT INTO Accounts
VALUES (
    2,
    2,
    'Checking',
    1500,
    SYSDATE
);

COMMIT;
INSERT INTO Employees
VALUES (
    1,
    'Alice Johnson',
    'Manager',
    70000,
    'HR',
    TO_DATE('2015-06-15','YYYY-MM-DD')
);

INSERT INTO Employees
VALUES (
    2,
    'Bob Brown',
    'Developer',
    60000,
    'IT',
    TO_DATE('2017-03-20','YYYY-MM-DD')
);

COMMIT;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

END;
/
BEGIN
    ProcessMonthlyInterest;
END;
/
SELECT * FROM Accounts;
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_Department IN VARCHAR2,
    p_BonusPercent IN NUMBER
)
IS
BEGIN

    UPDATE Employees
    SET Salary =
        Salary +
        (Salary * p_BonusPercent / 100)
    WHERE Department = p_Department;

    COMMIT;

END;
/
BEGIN
    UpdateEmployeeBonus(
        'IT',
        10
    );
END;
/
SELECT * FROM Employees;
CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccountID IN NUMBER,
    p_ToAccountID   IN NUMBER,
    p_Amount        IN NUMBER
)
IS
    v_Balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_Balance
    FROM Accounts
    WHERE AccountID = p_FromAccountID;

    IF v_Balance < p_Amount THEN

        RAISE_APPLICATION_ERROR(
            -20001,
            'Insufficient Funds'
        );

    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccountID;

    UPDATE Accounts
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccountID;

    COMMIT;

END;
/
BEGIN
    TransferFunds(
        1,
        2,
        500
    );
END;
/
SELECT * FROM Accounts;