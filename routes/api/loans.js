const express = require("express");
const router = express.Router();
const {
  getAllLoans,
  addLoan,
  updateLoan,
  deleteLoan,
  getLoanById,
} = require("../../dal/loanDAL");

// Get all loans (API)
router.get("/", async (req, res) => {
  const loans = await getAllLoans();
  res.json(loans);
});

// Add a new loan (API)
router.post("/", async (req, res) => {
  const newLoan = await addLoan(req.body);
  res.status(201).json(newLoan);
});

// Update a loan (API)
router.put("/:id", async (req, res) => {
  const updatedLoan = await updateLoan(req.params.id, req.body);
  res.json(updatedLoan);
});

// Delete a loan (API)
router.delete("/:id", async (req, res) => {
  await deleteLoan(req.params.id);
  res.status(204).send();
});

// Get a single loan by ID (API)
router.get("/:id", async (req, res) => {
  const loan = await getLoanById(req.params.id);
  res.json(loan);
});

module.exports = router;
