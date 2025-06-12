import Category from "../models/category.model.js";

// Created Category
export const createCategory = async (req, res) => {
  const { name, description, color } = req.body;

  try {
    // Periksa Category apakah ada yang sama
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists." });
    }

    await Category.create({
      name,
      description,
      color,
      postsCount: 0,
    });
    return res.status(201).json({ message: "Category created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Update category
export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description, color } = req.body;

  try {
    await Category.findByIdAndUpdate(id, { name, description, color });
    return res.status(200).json({ message: "Category updated successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Delete category
export const deleteCategory = async (req, res) => {
  const { id } = req.params;

  try {
    await Category.findByIdAndDelete(id);
    return res.status(200).json({ message: "Category deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};

// Ambil semua data category
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().lean();
    if (!categories) {
      return res.status(404).json({ message: "Categories not found." });
    }

    return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong." });
  }
};
