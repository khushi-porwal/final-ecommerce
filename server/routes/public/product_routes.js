import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  getProductById, // ✅ Add this import
} from "../../controllers/admin/product_controller.js";

const productRouter = express.Router();

// 🔍 Get all products (with optional ?category= query param)
productRouter.get("/products", getAllProducts);

// 🔍 Get product by ID (for ProductDetails page)
productRouter.get("/products/:id", getProductById); // ✅ This was missing

// 🔍 Get products by category (like /category/fruits)
productRouter.get("/products/category/:categoryName", getProductsByCategory);

// ✨ Admin-only: Create, Update, Delete
productRouter.post("/products", createProduct);
productRouter.put("/products/:id", updateProduct);
productRouter.delete("/products/:id", deleteProduct);

export default productRouter;
