CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(100),
    DOB DATE,
    Balance NUMBER,
    IsVIP VARCHAR2(5),
    LastModified DATE
);
CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    LoanAmount NUMBER,
    InterestRate NUMBER,
    StartDate DATE,
    EndDate DATE,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);
INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1950-05-15','YYYY-MM-DD'),
    15000,
    'FALSE',
    SYSDATE
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    5000,
    'FALSE',
    SYSDATE
);

COMMIT;
INSERT INTO Loans
VALUES (
    1,
    1,
    5000,
    8,
    SYSDATE,
    SYSDATE + 20
);

INSERT INTO Loans
VALUES (
    2,
    2,
    10000,
    10,
    SYSDATE,
    SYSDATE + 40
);

COMMIT;
SELECT * FROM Customers;

SELECT * FROM Loans;
SET SERVEROUTPUT ON;

DECLARE
    v_age NUMBER;
BEGIN
    FOR cust IN (
        SELECT CustomerID, DOB
        FROM Customers
    )
    LOOP
        v_age :=
        FLOOR(MONTHS_BETWEEN(SYSDATE,cust.DOB)/12);

        IF v_age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'Discount Applied to Customer '
                || cust.CustomerID
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/
SET SERVEROUTPUT ON;

BEGIN
    FOR cust IN (
        SELECT CustomerID, Balance
        FROM Customers
    )
    LOOP
        IF cust.Balance > 10000 THEN

            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = cust.CustomerID;

            DBMS_OUTPUT.PUT_LINE(
                'VIP Status Granted to Customer '
                || cust.CustomerID
            );
        END IF;
    END LOOP;

    COMMIT;
END;
/
SET SERVEROUTPUT ON;

BEGIN
    FOR loan_rec IN (
        SELECT c.Name,
               l.LoanID,
               l.EndDate
        FROM Customers c
        JOIN Loans l
        ON c.CustomerID = l.CustomerID
        WHERE l.EndDate
        BETWEEN SYSDATE
        AND SYSDATE + 30
    )
    LOOP
        DBMS_OUTPUT.PUT_LINE(
            'Reminder: '
            || loan_rec.Name
            || ' Loan ID '
            || loan_rec.LoanID
            || ' is due on '
            || TO_CHAR(
                loan_rec.EndDate,
                'DD-MON-YYYY'
            )
        );
    END LOOP;
END;
/
SELECT * FROM Customers;

SELECT * FROM Loans;

INSERT INTO Customers
VALUES (
    1,
    'John Doe',
    TO_DATE('1950-05-15','YYYY-MM-DD'),
    15000,
    'FALSE',
    SYSDATE
);

INSERT INTO Customers
VALUES (
    2,
    'Jane Smith',
    TO_DATE('1990-07-20','YYYY-MM-DD'),
    5000,
    'FALSE',
    SYSDATE
);

COMMIT;
INSERT INTO Loans
VALUES (
    1,
    1,
    5000,
    8,
    SYSDATE,
    SYSDATE + 20
);

INSERT INTO Loans
VALUES (
    2,
    2,
    10000,
    10,
    SYSDATE,
    SYSDATE + 40
);

COMMIT;
SELECT * FROM Customers;
SELECT * FROM Loans;

