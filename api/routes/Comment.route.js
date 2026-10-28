import express from "express";
import { addComment, commentCount, getComments } from "../controllers/Comment.controller.js"
import { authenticate } from "../middleware/authenticate.js";

const CommentRoute = express.Router();

CommentRoute.post("/add", authenticate, addComment);
CommentRoute.get("/all-comments/:blogId", getComments);
CommentRoute.get("/get-count/:blogId", commentCount);

export default CommentRoute;