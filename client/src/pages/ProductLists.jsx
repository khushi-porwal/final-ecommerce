import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchProductsByCategory } from "../services/productApi";
import Header from "../utils/Header";
import Footer from "../utils/Footer";
import CustomerLayout from "../components/CustomerLayout";

const ProductList = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchProductsByCategory(categoryName);
        setProducts(result);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, [categoryName]);

  return (
    <div>
      <Header/>
      <CustomerLayout/>
    <div className="p-4 ml-25">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoryName}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
    <Footer/>
   </div>
  );
};

export default ProductList;
