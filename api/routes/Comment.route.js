import express from "express";
import { addComment, commentCount, getComments, getAllComments } from "../controllers/Comment.controller.js"
import { authenticate } from "../middleware/authenticate.js";

const CommentRoute = express.Router();

CommentRoute.post("/add", authenticate, addComment);
CommentRoute.get("/all-comments/:blogId", getComments);
CommentRoute.get("/get-count/:blogId", commentCount);
CommentRoute.get("/all-comments", getAllComments);

export default CommentRoute;