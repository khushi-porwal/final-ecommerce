// import React from "react";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import Header from "../utils/Header";
// import Footer from "../utils/Footer";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import {createCheckoutSession} from "../services/stripe"
// const CartEmpty = () => {
//   const { cartItems, removeFromCart } = useCart();


// const handleCheckout = async () => {
//   try {
//     const orderData = {
//       items: cartItems,
//       total: cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
//       status: "Pending", // optional, you can define status schema-side
//       createdAt: new Date(),
//     };

//     const response = await createOrder(orderData); // 👈 Send to backend
//     console.log("Order response:", response);

//     // Optionally redirect to payment or confirmation page
//     createCheckoutSession(cartItems); // or call after storing order
//     alert("Order placed successfully!");
//   } catch (error) {
//     alert("Failed to place order.");
//   }
// };


//   return (
//     <div>
//       <Header />

//       <div className="min-h-screen flex flex-col items-center justify-start p-6">
//         {cartItems.length === 0 ? (
//           <div className="flex flex-col items-center justify-center">
//             <LocalMallIcon className="text-red-500 text-bold text-6xl" />
//             <p className="text-red-500 text-3xl font-semibold mt-4">
//               Your Cart is Empty
//             </p>
//             <Link to="/">
//               <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//                 Return to Home
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="w-full max-w-3xl">
//             <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>

//             {cartItems.map((item) => (
//               <div
//                 key={item._id}
//                 className="flex justify-between items-center border p-4 mb-4 rounded shadow"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image || item.thumbnail}
//                     alt={item.name || item.title}
//                     className="w-20 h-20 object-contain rounded"
//                   />
//                   <div>
//                     <h2 className="font-semibold text-lg">{item.name || item.title}</h2>
//                     <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
//                     <p className="font-medium text-base">
//                       ₹{(item.price * item.quantity).toFixed(2)}
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => removeFromCart(item._id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}

//             {/* ✅ Total Price */}
//             <div className="text-right mt-6">
//               <h2 className="text-xl font-bold">
//                 Total: ₹
//                 {cartItems
//                   .reduce(
//                     (total, item) => total + item.price * item.quantity,
//                     0
//                   )
//                   .toFixed(2)}
//               </h2>

//               <button onClick={handleCheckout} className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
//                 Proceed to Checkout
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CartEmpty;




import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import {createCheckoutSession} from "../services/stripe"
const CartEmpty = () => {
  const { cartItems, removeFromCart } = useCart();
    const handleCheckout = () => {
    createCheckoutSession(cartItems);
  };

  return (
    <div>
      <Header />

      <div className="min-h-screen flex flex-col items-center justify-start p-6">
        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <LocalMallIcon className="text-red-500 text-bold text-6xl" />
            <p className="text-red-500 text-3xl font-semibold mt-4">
              Your Cart is Empty
            </p>
            <Link to="/">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Return to Home
              </button>
            </Link>
          </div>
        ) : (
          <div className="w-full max-w-3xl">
            <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>

            {cartItems.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-center border p-4 mb-4 rounded shadow"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image || item.thumbnail}
                    alt={item.name || item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">{item.name || item.title}</h2>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    <p className="font-medium text-base">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* ✅ Total Price */}
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold">
                Total: ₹
                {cartItems
                  .reduce(
                    (total, item) => total + item.price * item.quantity,
                    0
                  )
                  .toFixed(2)}
              </h2>

              <button onClick={handleCheckout} className="mt-3 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartEmpty;
