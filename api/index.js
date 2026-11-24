import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRoute from "./routes/Auth.route.js";
import UserRoute from "./routes/User.route.js";
import CategoryRoute from "./routes/Category.route.js";
import BlogRoute from "./routes/Blog.route.js";
import CommentRoute from "./routes/Comment.route.js";
import BlogLikeRoute from "./routes/BlogLike.route.js";
import { handleError } from "./helpers/handleError.js";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cookieParser());
app.use(express.json());

const allowedOrigin = process.env.FRONTEND_URL?.replace(/\/$/, "");
app.use(cors({ origin: allowedOrigin, credentials: true }));

// Reuse one connection and wait for it before any route runs
let connectionPromise = null;
const connectDB = () => {
  if (mongoose.connection.readyState === 1) return Promise.resolve();
  if (!connectionPromise) {
    connectionPromise = mongoose
      .connect(process.env.MONGODB_CONN, {
        dbName: "blog-cluster",
        serverSelectionTimeoutMS: 8000,
      })
      .catch((err) => {
        connectionPromise = null; // allow a retry on the next request
        throw err;
      });
  }
  return connectionPromise;
};

app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(handleError(500, `Database connection failed: ${error.message}`));
  }
});

app.use("/api/auth", AuthRoute);
app.use("/api/user", UserRoute);
app.use("/api/category", CategoryRoute);
app.use("/api/blog", BlogRoute);
app.use("/api/comment", CommentRoute);
app.use("/api/blog-like", BlogLikeRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({ success: false, statusCode, message });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`Server is running on Port: ${PORT}`));
}

export default app;