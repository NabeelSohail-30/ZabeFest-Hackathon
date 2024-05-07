import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import customerApi from "./apis/customerApi.mjs";
import branchApi from "./apis/branchApi.mjs";
import db from "./db/db.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to the API!",
  });
});

app.use("/api/customers", customerApi);

app.use("/api/branches", branchApi);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
