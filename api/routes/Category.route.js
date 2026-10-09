import express from "express";
import { addCategory, showCategory, updateCategory, deleteCategory, getAllCategories } from "../controllers/Category.controller.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/add", addCategory);
CategoryRoute.get("/show/:categoryid", showCategory);
CategoryRoute.get("/all-categories", getAllCategories);
CategoryRoute.put("/update/:categoryid", updateCategory);
CategoryRoute.delete("/delete/:categoryid", deleteCategory);

export default CategoryRoute;