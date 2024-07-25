INSERT INTO customers (name, address, phone_number, email) VALUES
('John Doe', '123 Elm St', '123-456-7890', 'john@example.com'),
('Jane Smith', '456 Oak St', '987-654-3210', 'jane@example.com'),
('Alice Johnson', '789 Pine St', '555-123-4567', 'alice@example.com'),
('Bob Brown', '101 Maple St', '555-765-4321', 'bob@example.com'),
('Charlie Davis', '202 Cedar St', '555-234-5678', 'charlie@example.com'),
('Diana Evans', '303 Birch St', '555-876-5432', 'diana@example.com'),
('Ethan Fisher', '404 Walnut St', '555-345-6789', 'ethan@example.com'),
('Fiona Green', '505 Cherry St', '555-987-6543', 'fiona@example.com'),
('George Harris', '606 Spruce St', '555-456-7890', 'george@example.com'),
('Hannah Ives', '707 Fir St', '555-876-5432', 'hannah@example.com'),
('Ian Jones', '808 Redwood St', '555-234-5678', 'ian@example.com'),
('Jack Kelly', '909 Willow St', '555-345-6789', 'jack@example.com'),
('Katie Lee', '1010 Cypress St', '555-456-7890', 'katie@example.com'),
('Leo Martin', '1111 Aspen St', '555-567-8901', 'leo@example.com'),
('Mia Nelson', '1212 Dogwood St', '555-678-9012', 'mia@example.com'),
('Nathan Owens', '1313 Elm St', '555-789-0123', 'nathan@example.com'),
('Olivia Perez', '1414 Hawthorn St', '555-890-1234', 'olivia@example.com'),
('Paul Quinn', '1515 Maple St', '555-901-2345', 'paul@example.com'),
('Quincy Ross', '1616 Oak St', '555-012-3456', 'quincy@example.com'),
('Rachel Scott', '1717 Pine St', '555-123-4567', 'rachel@example.com'),
('Steve Turner', '1818 Birch St', '555-234-5678', 'steve@example.com'),
('Tina Underwood', '1919 Cedar St', '555-345-6789', 'tina@example.com'),
('Uma Vargas', '2020 Cherry St', '555-456-7890', 'uma@example.com'),
('Victor Wilson', '2121 Walnut St', '555-567-8901', 'victor@example.com'),
('Wendy Xu', '2222 Fir St', '555-678-9012', 'wendy@example.com');

INSERT INTO loans (customer_id, amount, interest_rate, start_date, end_date, status) VALUES
(1, 5000.00, 3.50, '2024-01-01', '2025-01-01', 'active'),
(2, 10000.00, 4.00, '2024-02-01', '2026-02-01', 'active'),
(3, 7500.00, 3.75, '2024-03-01', '2025-03-01', 'completed'),
(4, 12000.00, 4.25, '2024-04-01', '2026-04-01', 'active');

INSERT INTO payments (loan_id, payment_date, amount) VALUES
(1, '2024-02-01', 500.00),
(1, '2024-03-01', 500.00),
(2, '2024-03-01', 1000.00),
(3, '2024-05-01', 750.00),
(4, '2024-06-01', 1200.00);

