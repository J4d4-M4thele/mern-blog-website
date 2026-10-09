import { handleError } from "../helpers/handleError.js";
import Category from "../models/category.model.js";

export const addCategory = async (req, res, next) => {
  try {
    const { name, slug } = req.body;
    const category = new Category({ name, slug });
    await category.save();

    res.status(200).json({
      success: true,
      message: "Category created successfully",
      category,
    });
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const showCategory = async (req, res, next) => {
    try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};


export const getAllCategories = async (req, res, next) => {
    try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const updateCategory = async (req, res, next) => {
    try {
  } catch (error) {
    next(handleError(500, error.message));
  }
};

export const deleteCategory = async (req, res, next) => {
    try {
    } catch (error) {
        next(handleError(500, error.message));
    }
};
