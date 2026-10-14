import express from "express";
import { addBlog, showBlog, updateBlog, deleteBlog, getAllBlogs } from "../controllers/Blog.controller.js";

const BlogRoute = express.Router();

BlogRoute.post("/add", upload.single('file'), addBlog);
BlogRoute.get("/show/:blogid", showBlog);
BlogRoute.get("/all-blogs", getAllBlogs);
BlogRoute.put("/update/:blogid", updateBlog);
BlogRoute.delete("/delete/:blogid", deleteBlog);

export default BlogRoute;