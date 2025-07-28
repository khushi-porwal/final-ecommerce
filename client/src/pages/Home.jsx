import React, { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import Header from "../utils/Header";
import CustomerLayout from "../components/CustomerLayout";
import Footer from "../utils/Footer";
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await api.get("/products"); // No category filter = all products
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchAllProducts();
  }, []);

  return (
    <div>
        <Header/>
        <CustomerLayout/>
    <div className="p-6 flex flex-wrap ">
        <div className="justify-center ml-23 gap-6">
      <h2 className="text-2xl font-bold  mb-4">Latest Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Home;
