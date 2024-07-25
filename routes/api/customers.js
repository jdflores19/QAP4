const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../../dal/customerDAL");

// Get all customers
router.get("/", async (req, res) => {
  const customers = await getAllCustomers();
  res.json(customers);
});

// Add a new customer
router.post("/", async (req, res) => {
  const newCustomer = await addCustomer(req.body);
  res.status(201).json(newCustomer);
});

// Update a customer
router.put("/:id", async (req, res) => {
  const updatedCustomer = await updateCustomer(req.params.id, req.body);
  res.json(updatedCustomer);
});

// Delete a customer
router.delete("/:id", async (req, res) => {
  await deleteCustomer(req.params.id);
  res.status(204).send();
});

module.exports = router;
