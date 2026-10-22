import express from "express";
import { addComment, commentCount, getComments } from "../controllers/Comment.controller.js"

const CommentRoute = express.Router();

CommentRoute.post("/add", addComment);
CommentRoute.get("/all-comments/:blogId", getComments);
CommentRoute.get("/get-count/:blogId", commentCount);

export default CommentRoute;