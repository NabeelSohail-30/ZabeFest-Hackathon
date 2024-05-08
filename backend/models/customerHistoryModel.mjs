import mongoose from "mongoose";

const customerHistorySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  branchCode: {
    type: String,
    required: true,
  },
  loginDate: {
    type: Date,
    default: Date.now,
  },
  logoutDate: {
    type: Date,
    default: Date.now,
  },
  transactionAmount: {
    type: Number,
    required: true,
  },
});

const CustomerHistory = mongoose.model(
  "CustomerHistory",
  customerHistorySchema
);

export default CustomerHistory;
