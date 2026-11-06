import express from "express";
import { addCategory, showCategory, updateCategory, deleteCategory, getAllCategories } from "../controllers/Category.controller.js";
import { onlyadmin } from "../middleware/onlyadmin.js";
import { authenticate } from "../middleware/authenticate.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/add", authenticate, onlyadmin, addCategory);
CategoryRoute.get("/show/:categoryid", authenticate, onlyadmin, showCategory);
CategoryRoute.get("/all-categories", getAllCategories);
CategoryRoute.put("/update/:categoryid", authenticate, onlyadmin, updateCategory);
CategoryRoute.delete("/delete/:categoryid", authenticate, onlyadmin, deleteCategory);

export default CategoryRoute;