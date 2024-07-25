const { Pool } = require("pg");
const pool = new Pool({
  user: "your_db_user",
  host: "localhost",
  database: "your_db_name",
  password: "your_db_password",
  port: 5432,
});

const getAllLoans = async () => {
  const { rows } = await pool.query("SELECT * FROM loans");
  return rows;
};

const getLoanById = async (id) => {
  const { rows } = await pool.query("SELECT * FROM loans WHERE id = $1", [id]);
  return rows[0];
};

const addLoan = async (loan) => {
  const { rows } = await pool.query(
    "INSERT INTO loans (customer_id, amount, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *",
    [loan.customer_id, loan.amount, loan.start_date, loan.end_date]
  );
  return rows[0];
};

const updateLoan = async (id, loan) => {
  const { rows } = await pool.query(
    "UPDATE loans SET customer_id = $1, amount = $2, start_date = $3, end_date = $4 WHERE id = $5 RETURNING *",
    [loan.customer_id, loan.amount, loan.start_date, loan.end_date, id]
  );
  return rows[0];
};

const deleteLoan = async (id) => {
  await pool.query("DELETE FROM loans WHERE id = $1", [id]);
};

module.exports = { getAllLoans, getLoanById, addLoan, updateLoan, deleteLoan };
