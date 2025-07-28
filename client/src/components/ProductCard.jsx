import React from "react";
import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useCart } from "../context/CartContext"; // ✅ Custom hook

const ProductCard = ({ product, onEdit, onDelete }) => {
  const role = localStorage.getItem("role");
  const { addToCart } = useCart();

  return (
    <div className="border rounded-xl shadow p-4 max-w-xs relative bg-white">
      {/* ✅ Admin Controls */}
      {role === "admin" && (
        <div className="absolute top-3 right-3 flex gap-2 z-10">
          <EditIcon
            onClick={() => onEdit(product)}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
            titleAccess="Edit Product"
          />
          <DeleteIcon
            onClick={() => onDelete(product._id)}
            className="text-red-600 hover:text-red-800 cursor-pointer"
            titleAccess="Delete Product"
          />
        </div>
      )}

      {/* ✅ Wrap image & title in a link to detail page */}
      <Link to={`/productdetails/${product._id}`}>
        <img
          src={product.image || product.thumbnail}
          alt={product.name || product.title}
          className="w-full h-48 object-contain my-2 transition hover:scale-105"
        />
      </Link>

      <div className="text-xs text-yellow-800 font-semibold bg-yellow-100 px-2 py-1 rounded-full w-fit mb-1 flex items-center gap-1">
        <AccessAlarmIcon fontSize="inherit" />
        Ships in 1 week
      </div>

      <p className="text-sm text-gray-500 font-medium">{product.description}</p>

      <Link to={`/productdetails/${product._id}`}>
        <h3 className="font-semibold text-base mb-2 hover:underline">
          {product.name || product.title}
        </h3>
      </Link>

      <select className="border rounded bg-blue-50 w-full px-2 py-1 text-sm mb-2">
        <option>1 kg</option>
        <option>500 g</option>
        <option>250 g</option>
      </select>

      <div className="mb-2 flex items-center gap-2">
        <span className="text-lg font-bold flex items-center">
          <CurrencyRupeeIcon fontSize="small" />
          {product.price}
        </span>
        <span className="line-through text-gray-400 text-sm flex items-center">
          <CurrencyRupeeIcon fontSize="small" />
          {(product.price * 1.2).toFixed(2)}
        </span>
      </div>

      <button
        className="w-full font-medium bg-blue-700 text-white rounded-lg px-1 py-1 hover:bg-blue-800 transition"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
