const express = require("express");
const router = express.Router();
const {
  getAllCustomers,
  getCustomerById,
  addCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../dal/customerDAL");

// Render list of customers
router.get("/", async (req, res) => {
  const customers = await getAllCustomers();
  res.render("customers", { customers });
});

// Show form to create a new customer
router.get("/new", (req, res) => {
  res.render("newCustomer");
});

// Create a new customer
router.post("/", async (req, res) => {
  await addCustomer(req.body);
  res.redirect("/customers");
});

// Show form to update a customer
router.get("/:id/edit", async (req, res) => {
  const customer = await getCustomerById(req.params.id);
  res.render("editCustomer", { customer });
});

// Update a customer
router.put("/:id", async (req, res) => {
  await updateCustomer(req.params.id, req.body);
  res.redirect("/customers");
});

// Delete a customer
router.delete("/:id", async (req, res) => {
  await deleteCustomer(req.params.id);
  res.redirect("/customers");
});

module.exports = router;
