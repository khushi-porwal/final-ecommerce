import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:4000/api/admin/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log("✅ Admin Orders Response:", res.data);

        // set data properly
        setOrders(Array.isArray(res.data) ? res.data : []);
      } catch (error) {
        console.error("❌ Failed to fetch orders:", error);
        setOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div className="grid gap-4">
          {orders.map((order, index) => (
            <div
              key={order._id || index}
              className="p-4 rounded-2xl shadow-md border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Order #{index + 1}</span>
                <span className="text-sm text-gray-500">
                  {order.createdAt
                    ? format(new Date(order.createdAt), "dd MMM yyyy, hh:mm a")
                    : "Unknown Date"}
                </span>
              </div>

              <div className="mb-2">
                <strong>User ID:</strong> {order.user || "N/A"}
              </div>

              <div className="mb-2">
                <strong>Total Amount:</strong> ₹{order.totalAmount}
              </div>

              <div className="mb-2">
                <strong>Status:</strong>{" "}
                <span className="text-blue-600">{order.status}</span>
              </div>

              <div>
                <strong>Items:</strong>
                <ul className="list-disc pl-5 mt-1 text-sm">
                  {order.items?.map((item, idx) => (
                    <li key={idx}>
                      Product ID: {item.productId} | Quantity: {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
