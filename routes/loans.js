const express = require("express");
const router = express.Router();
const {
  getAllLoans,
  addLoan,
  updateLoan,
  deleteLoan,
} = require("../dal/loanDAL");

// Display all loans
router.get("/", async (req, res) => {
  const loans = await getAllLoans();
  res.render("loans", { loans });
});

// Render page to add a new loan
router.get("/new", (req, res) => {
  res.render("newLoan");
});

// Handle adding a new loan
router.post("/", async (req, res) => {
  await addLoan(req.body);
  res.redirect("/loans");
});

// Render page to edit a loan
router.get("/:id/edit", async (req, res) => {
  const loan = await getLoanById(req.params.id);
  res.render("editLoan", { loan });
});

// Handle updating a loan
router.put("/:id", async (req, res) => {
  await updateLoan(req.params.id, req.body);
  res.redirect("/loans");
});

// Handle deleting a loan
router.delete("/:id", async (req, res) => {
  await deleteLoan(req.params.id);
  res.redirect("/loans");
});

module.exports = router;
