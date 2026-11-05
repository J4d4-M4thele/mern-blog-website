import express from "express";
import { addComment, commentCount, getComments, getAllComments, deleteComment } from "../controllers/Comment.controller.js"
import { authenticate } from "../middleware/authenticate.js";

const CommentRoute = express.Router();

CommentRoute.post("/add", authenticate, addComment);
CommentRoute.get("/all-comments/:blogId", getComments);
CommentRoute.get("/get-count/:blogId", commentCount);
CommentRoute.get("/all-comments",authenticate, getAllComments);
CommentRoute.delete("/delete/:commentId", authenticate, deleteComment);

export default CommentRoute;