import express from "express";
import data from "./data.js";
const app = express();
app.get("/api/products", (req, res) => {
  res.send(data.products);
});
app.get("/", (req, res) => {
  res.send("Server is ready");
});
const port = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server at http://localhost:${port}`);
});
