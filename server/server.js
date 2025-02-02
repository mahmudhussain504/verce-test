import express from "express";
import cors from "cors";
import "dotenv/config";
import colors from "colors";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

app.get("/api/help", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.bgGreen.bold);
});
