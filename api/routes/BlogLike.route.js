import express from "express";
import { doLike, likeCount } from "../controllers/BlogLike.controller.js"
import { authenticate } from "../middleware/authenticate.js";

const BlogLikeRoute = express.Router();

BlogLikeRoute.post("/like", authenticate, doLike);
BlogLikeRoute.get("/get-count/:blogId{/:userId}", likeCount);

export default BlogLikeRoute;