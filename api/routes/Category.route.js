import express from "express";
import { addCategory, showCategory, updateCategory, deleteCategory, getAllCategories } from "../controllers/Category.controller.js";
import { onlyadmin } from "../middleware/onlyadmin.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/add", onlyadmin, addCategory);
CategoryRoute.get("/show/:categoryid", onlyadmin, showCategory);
CategoryRoute.get("/all-categories", getAllCategories);
CategoryRoute.put("/update/:categoryid", onlyadmin, updateCategory);
CategoryRoute.delete("/delete/:categoryid", onlyadmin, deleteCategory);

export default CategoryRoute;