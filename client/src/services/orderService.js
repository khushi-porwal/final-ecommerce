// src/services/orderService.js
import axios from "axios";

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post("/admin/orders/add", orderData);
    return response.data;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
};
