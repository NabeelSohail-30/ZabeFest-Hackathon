import express from "express";
import CustomerHistory from "../models/customerHistoryModel.mjs";

const router = express.Router();

router.post("/new-customer-history", async (req, res) => {
  try {
    const { email, branchCode } = req.body;

    const newCustomerHistory = new CustomerHistory({
      email,
      branchCode,
    });

    await newCustomerHistory.save();

    res.status(201).json({ message: "Customer history created" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/update-customer-history", async (req, res) => {
  try {
    const { email, branchCode, logoutDate, transactionAmount } = req.body;
    const customerHistory = await CustomerHistory.findOneAndUpdate(
      { email, branchCode },
      { logoutDate, transactionAmount },
      { new: true }
    );
    res.status(201).json({ message: "Customer history updated" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
