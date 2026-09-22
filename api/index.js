import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);

mongoose
  .connect(process.env.MONGODB_CONN, { dbName: "blog-cluster" })
  .then(() => console.log("Database is connected successfully"))
  .catch((err) => console.log("Database couldn't connect: ", err));

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
