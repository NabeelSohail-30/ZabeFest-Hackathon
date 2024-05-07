import express from "express";
import Branch from "../models/branchModel.mjs";

const router = express.Router();

router.post("/new-branch", async (req, res) => {
  try {
    const { branchCode, branchName, location } = req.body;

    const newBranch = new Branch({
      branchCode,
      branchName,
      location,
    });

    await newBranch.save();

    res
      .status(201)
      .json({ message: "Branch added successfully", branch: newBranch });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/codes", async (req, res) => {
  try {
    const branches = await Branch.find({}, "branchCode");
    res.status(200).json(branches.map((branch) => branch.branchCode));
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
