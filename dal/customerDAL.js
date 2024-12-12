// dal/customerDAL.js
const { Pool } = require("pg");
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

const getAllCustomers = async () => {
  const { rows } = await pool.query("SELECT * FROM customers");
  return rows;
};

const getCustomerById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM customers WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

const addCustomer = async (customer) => {
  const { name, address, phone_number, email } = customer;
  await pool.query(
    "INSERT INTO customers (name, address, phone_number, email) VALUES ($1, $2, $3, $4)",
    [name, address, phone_number, email]
  );
};

const updateCustomer = async (id, customer) => {
  const { name, address, phone_number, email } = customer;
  await pool.query(
    "UPDATE customers SET name = $1, address = $2, phone_number = $3, email = $4 WHERE id = $5",
    [name, address, phone_number, email, id]
  );
};

const deleteCustomer = async (id) => {
  await pool.query("DELETE FROM customers WHERE id = $1", [id]);
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
};
