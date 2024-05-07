import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  branchCode: {
    type: String,
    required: true,
    unique: true,
  },
  branchName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const Branch = mongoose.model("Branch", branchSchema);

export default Branch;
