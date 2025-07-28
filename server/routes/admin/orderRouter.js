// routes/admin/orderRouter.js
import express from "express";
import Order from "../../models/order.js"; // Make sure the file has `.js` extension

const router = express.Router();

// Create a new order
// routes/admin/orderRouter.js
router.post("/add", async (req, res) => {
  try {
    const newOrder = new Order({
      products: req.body.products,  // must match frontend
      totalAmount: req.body.totalAmount,
      user: req.body.user, // must be ObjectId (string)
    });
    await newOrder.save();
    res.status(201).json({ message: "Order placed successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to place order", error: err.message });
  }
});


// Get all orders (for admin)
// routes/admin/orderRouter.js
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "name email").sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch orders", error: err.message });
  }
});


export default router;
