const express = require("express");
const router = express.Router();
const {
  getAllPayments,
  addPayment,
  updatePayment,
  deletePayment,
} = require("../../dal/paymentDAL");

// Get all payments
router.get("/", async (req, res) => {
  const payments = await getAllPayments();
  res.json(payments);
});

// Add a new payment
router.post("/", async (req, res) => {
  const newPayment = await addPayment(req.body);
  res.status(201).json(newPayment);
});

// Update a payment
router.put("/:id", async (req, res) => {
  const updatedPayment = await updatePayment(req.params.id, req.body);
  res.json(updatedPayment);
});

// Delete a payment
router.delete("/:id", async (req, res) => {
  await deletePayment(req.params.id);
  res.status(204).send();
});

module.exports = router;
