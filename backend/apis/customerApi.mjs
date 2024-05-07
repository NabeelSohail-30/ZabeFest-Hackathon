import express from "express";
import Customer from "../models/customerModel.mjs";

const router = express.Router();

router.post("/new-customer", async (req, res) => {
  try {
    const { name, cnic, email, bankAccount, password } = req.body;

    // Create a new customer instance
    const newCustomer = new Customer({
      name,
      cnic,
      email,
      bankAccount,
      password,
    });

    // Save the customer to the database
    await newCustomer.save();

    res
      .status(201)
      .json({ message: "Customer added successfully", customer: newCustomer });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
