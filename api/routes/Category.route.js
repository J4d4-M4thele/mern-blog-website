import express from "express";
import { addCategory, showCategory, editCategory, deleteCategory } from "../controllers/Category.controller.js";

const CategoryRoute = express.Router();

CategoryRoute.post("/add", addCategory);
CategoryRoute.get("/show", showCategory);
CategoryRoute.put("/update/:categoryid", editCategory);
CategoryRoute.delete("/delete/:id", deleteCategory);