// QAP4
// Joseph Flores
// July 22, 2024

const express = require("express");
const methodOverride = require("method-override");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Web routes
const customerRoutes = require("./routes/customers");
const loanRoutes = require("./routes/loans");
const paymentRoutes = require("./routes/payments");

// API routes
const apiCustomerRoutes = require("./routes/api/customers");
const apiLoanRoutes = require("./routes/api/loans");
const apiPaymentRoutes = require("./routes/api/payments");

app.use("/customers", customerRoutes);
app.use("/loans", loanRoutes);
app.use("/payments", paymentRoutes);
app.use("/api/customers", apiCustomerRoutes);
app.use("/api/loans", apiLoanRoutes);
app.use("/api/payments", apiPaymentRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Loan Management System!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
