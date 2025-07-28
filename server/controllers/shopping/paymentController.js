// import Stripe from "stripe";
// import dotenv from "dotenv"

// dotenv.config()
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// export const createStripeCheckout = async (req, res) => {
//   const { cartItems } = req.body;

//   try {
//     const line_items = cartItems.map((item) => ({
//       price_data: {
//         currency: "inr",
//         product_data: {
//           name: item.name,
//           description: item.description,
//         },
//         unit_amount: item.price * 100, // Stripe expects amount in paisa (or cents)
//       },
//       quantity: item.quantity || 1,
//     }));

//     const session = await stripe.checkout.sessions.create({
//       line_items,
//       mode: "payment", // ✅ correct
//       success_url: "http://localhost:5177/success",
//       cancel_url: "http://localhost:5177/cancel",
//     });

//     res.json({ id: session.id });
//   } catch (error) {
//     console.error("❌ Stripe error:", error);
//     res.status(500).json({ error: "Failed to create Stripe Session" });
//   }
// };


// controllers/shopping/PaymentController.js

import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createStripeCheckout = async (req, res) => {
  const { cartItems } = req.body;

  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return res.status(400).json({ error: "cartItems is required and must be a non-empty array." });
  }

  try {
    console.log("📦 Cart Items received at backend:", cartItems);

    const line_items = cartItems.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
          description: item.description || "No description",
        },
        unit_amount: Math.round(item.price * 100), // amount in paisa
      },
      quantity: item.quantity || 1,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: "http://localhost:5173/success",
      cancel_url: "http://localhost:5173/cancel",
    });

    res.status(200).json({ id: session.id });
  } catch (error) {
    console.error("❌ Stripe error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
