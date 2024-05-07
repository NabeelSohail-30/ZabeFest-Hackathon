import mongoose from "mongoose";

const customerSchema = {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  bankAccount: {
    type: String,
    required: true,
    unique: true,
  },
};

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
