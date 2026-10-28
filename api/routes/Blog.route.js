import express from "express";
import { addBlog, editBlog, updateBlog, deleteBlog, showAllBlog, getAllBlogs, getBlog, getRelatedBlog } from "../controllers/Blog.controller.js";
import upload from "../middleware/multer.js";
import { authenticate } from "../middleware/authenticate.js";

const BlogRoute = express.Router();

BlogRoute.post("/add", authenticate, upload.single('file'), addBlog);
BlogRoute.get("/edit/:blogid", authenticate, editBlog);
BlogRoute.get("/all-blogs", authenticate, showAllBlog);
BlogRoute.put("/update/:blogid", authenticate, upload.single('file'), updateBlog);
BlogRoute.delete("/delete/:blogid", authenticate, deleteBlog);

BlogRoute.get('/blogs', getAllBlogs)
BlogRoute.get('/get-blog/:slug', getBlog)
BlogRoute.get('/get-related-blog/:category', getRelatedBlog)

export default BlogRoute;