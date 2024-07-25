CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    address VARCHAR(255),
    phone_number VARCHAR(15),
    email VARCHAR(100)
);

CREATE TABLE loans (
    id SERIAL PRIMARY KEY,
    customer_id INTEGER REFERENCES customers(id),
    amount DECIMAL(10, 2),
    interest_rate DECIMAL(5, 2),
    start_date DATE,
    end_date DATE,
    status VARCHAR(50)
);

CREATE TABLE payments (
    id SERIAL PRIMARY KEY,
    loan_id INTEGER REFERENCES loans(id),
    payment_date DATE,
    amount DECIMAL(10, 2)
);
