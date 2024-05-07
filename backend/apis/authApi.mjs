import express from "express";
import Customer from "../models/customerModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user in database
    const customer = await Customer.findOne({ username });

    if (!customer) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = jwt.sign(
      { userId: user._id },
      "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcxNTA5NTg0OCwiaWF0IjoxNzE1MDk1ODQ4fQ.XfbjaPnCMx0oLPaooqpTbpexLoWQg_aRONK7TPeMaiM",
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
