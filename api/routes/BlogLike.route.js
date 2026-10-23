import express from "express";
import { doLike, likeCount } from "../controllers/BlogLike.controller.js"

const BlogLikeRoute = express.Router();

BlogLikeRoute.post("/like", doLike);
BlogLikeRoute.get("/get-count/:blogId", likeCount);

export default BlogLikeRoute;