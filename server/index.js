// server.js

import express from 'express';
import cors from 'cors';
import paymentRoutes from "./routes/shopping/paymentRoutes.js"
import dotenv from 'dotenv';
import productRouter from './routes/public/product_routes.js';
import connectDB from './config/dbconfig.js';
import router from './routes/auth/auth_router.js';
import adminRouter from './routes/admin/admin_router.js';
// ✅ Use dynamic import in ES Module (modern way)
import contactRoute from "./routes/public/contactRoute.js";
import orderRouter from "./routes/admin/orderRouter.js"
dotenv.config(); // Load environment variables from .env

const app = express();

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ CORS Configuration — allows multiple local frontend ports
const allowedOrigins = [
  "http://localhost:5174",
  "http://localhost:5176",
  "http://localhost:5177",
  "http://localhost:5175",
  "http://localhost:5173",
  "http://localhost:3000"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("❌ Not allowed by CORS: " + origin));
    }
  },
  credentials: true,
}));

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("✅ API is working");
});

// ✅ Connect to MongoDB
connectDB().catch(err => {
  console.error("❌ MongoDB connection failed:", err.message);
  process.exit(1);
});

// ✅ Auth Routes
app.use('/api', productRouter)
app.use("/api/payment", paymentRoutes);
app.use('/api/auth', router);
app.use('/api/admin', adminRouter)
app.use("/api", contactRoute);
app.use("/api/admin/orders", orderRouter);
// ✅ Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
