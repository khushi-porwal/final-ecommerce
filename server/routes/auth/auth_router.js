// routes/auth/auth_routes.js

import express from 'express';
import { registerUser, loginUser } from '../../controllers/auth/auth_controller.js';
import { verifyToken, isAdmin } from '../../middleware/authMiddleware.js';

const router = express.Router();

// ✅ Public Routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// ✅ Protected: Role Check
router.get('/check-role', verifyToken, (req, res) => {
  return res.status(200).json({ role: req.user.role });
});

export default router;
