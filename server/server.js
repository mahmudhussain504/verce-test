import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
