import express from "express";
import { addComment, getComments } from "../controllers/Comment.controller.js"

const CommentRoute = express.Router();

CommentRoute.post("/add", addComment);
CommentRoute.get("/all-comments/:blogId", getComments);

export default CommentRoute;