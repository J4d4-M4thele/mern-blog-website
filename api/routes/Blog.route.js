import express from "express";
import { addBlog, editBlog, updateBlog, deleteBlog, showAllBlog, getAllBlogs, getBlog } from "../controllers/Blog.controller.js";
import upload from "../middleware/multer.js";

const BlogRoute = express.Router();

BlogRoute.post("/add", upload.single('file'), addBlog);
BlogRoute.get("/edit/:blogid", editBlog);
BlogRoute.get("/all-blogs", showAllBlog);
BlogRoute.put("/update/:blogid", upload.single('file'), updateBlog);
BlogRoute.delete("/delete/:blogid", deleteBlog);

BlogRoute.get('/blogs', getAllBlogs)
BlogRoute.get('/get-blog/:slug', getBlog)

export default BlogRoute;