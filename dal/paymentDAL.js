// dal/paymentDAL.js
const { Pool } = require("pg");
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

const getAllPayments = async () => {
  const { rows } = await pool.query("SELECT * FROM payments");
  return rows;
};

const getPaymentById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM payments WHERE id = $1", [
    id,
  ]);
  return rows[0];
};

const addPayment = async (payment) => {
  const { loan_id, amount, payment_date } = payment;
  await pool.query(
    "INSERT INTO payments (loan_id, amount, payment_date) VALUES ($1, $2, $3)",
    [loan_id, amount, payment_date]
  );
};

const updatePayment = async (id, payment) => {
  const { loan_id, amount, payment_date } = payment;
  await pool.query(
    "UPDATE payments SET loan_id = $1, amount = $2, payment_date = $3 WHERE id = $4",
    [loan_id, amount, payment_date, id]
  );
};

const deletePayment = async (id) => {
  await pool.query("DELETE FROM payments WHERE id = $1", [id]);
};

module.exports = {
  getAllPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
};
