import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import axios from "axios";
import {useCart} from "../context/CartContext"
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useCart();

  const fetchProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/api/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error("Error fetching product:", err.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div>
      <Header />
      <div className="flex flex-col lg:flex-row border rounded-lg shadow-md max-w-6xl mx-auto mt-10 bg-white overflow-hidden">
        <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[350px] object-cover rounded-lg"
          />
        </div>

        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between gap-5">
          <div>
            <p className="text-gray-500 font-semibold text-sm">
              {product.category}
            </p>
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h1>
            <div className="text-sm md:text-base">
              <p className="text-gray-800 font-bold">
                Price: ₹{product.price}
              </p>
              <p className="text-gray-500 text-xs">(inclusive of all taxes)</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button onClick={()=> addToCart(product)} className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 w-full sm:w-auto">
              Add to basket
            </button>
            <button className="border border-gray-400 text-gray-700 font-medium py-2 px-4 rounded hover:bg-gray-100 w-full sm:w-auto">
              Save for later
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>

            <span className="mt-2 sm:mt-0 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full inline-flex items-center gap-1 mt-4">
              <AccessAlarmIcon fontSize="small" /> 5 MINS
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
