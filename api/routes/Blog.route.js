import express from "express";
import { addBlog, editBlog, updateBlog, deleteBlog, getAllBlogs } from "../controllers/Blog.controller.js";
import upload from "../middleware/multer.js";

const BlogRoute = express.Router();

BlogRoute.post("/add", upload.single('file'), addBlog);
BlogRoute.get("/edit/:blogid", editBlog);
BlogRoute.get("/all-blogs", getAllBlogs);
BlogRoute.put("/update/:blogid", upload.single('file'), updateBlog);
BlogRoute.delete("/delete/:blogid", deleteBlog);

export default BlogRoute;