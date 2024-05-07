import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import customerApi from "./apis/customerApi.mjs";
import branchApi from "./apis/branchApi.mjs";
import authApi from "./apis/authApi.mjs";
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

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.userId = decoded.userId;
    next();
  });
};

app.use("/api/customers", customerApi);

app.use("/api/branches", branchApi);

app.use("/api/auth", authApi);

// Example protected route
app.get("/api/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "You have access to this protected route" });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
