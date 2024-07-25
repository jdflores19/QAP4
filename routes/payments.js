const express = require("express");
const router = express.Router();
const {
  getAllPayments,
  getPaymentById,
  addPayment,
  updatePayment,
  deletePayment,
} = require("../dal/paymentDAL");

// Render list of payments
router.get("/", async (req, res) => {
  const payments = await getAllPayments();
  res.render("payments", { payments });
});

// Show form to create a new payment
router.get("/new", (req, res) => {
  res.render("newPayment");
});

// Create a new payment
router.post("/", async (req, res) => {
  await addPayment(req.body);
  res.redirect("/payments");
});

// Show form to update a payment
router.get("/:id/edit", async (req, res) => {
  const payment = await getPaymentById(req.params.id);
  res.render("editPayment", { payment });
});

// Update a payment
router.put("/:id", async (req, res) => {
  await updatePayment(req.params.id, req.body);
  res.redirect("/payments");
});

// Delete a payment
router.delete("/:id", async (req, res) => {
  await deletePayment(req.params.id);
  res.redirect("/payments");
});

module.exports = router;
