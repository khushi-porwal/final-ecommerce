import express from "express"

// routes/shopping/paymentRoutes.js
import { createStripeCheckout } from "../../controllers/shopping/paymentController.js";


const router = express.Router();
router.post("/create-checkout-session", createStripeCheckout);

export default router;