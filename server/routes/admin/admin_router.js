// routes/admin/admin_router.js

import express from 'express';
import { verifyToken, isAdmin } from '../../middleware/authMiddleware.js';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts
} from '../../controllers/admin/product_controller.js';

const router = express.Router();

// ✅ Admin Routes (Protected)
router.post('/products', verifyToken, isAdmin, createProduct);
router.put('/products/:id', verifyToken, isAdmin, updateProduct);
router.delete('/products/:id', verifyToken, isAdmin, deleteProduct);
router.get('/products', verifyToken, isAdmin, getAllProducts); // Optional for admin dashboard

export default router;
