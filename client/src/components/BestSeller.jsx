import ProductCard from "./ProductCard";

import React from "react";
import { useState, useEffect } from "react";
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const fruits = data.products.filter((item) =>
          item.tags.includes("vegetables") || item.tags.includes("meat")|| item.tags.includes("seafood")|| item.tags.includes("fruits")
        );
        setProducts(fruits);
      })
      .catch((err) => console.error("Fetch failed:", err));
  }, []);
  return (
    <div className="p-6">
        <h2 className="text-2xl ml-40 font-bold mb-4">BestSeller</h2>
        <div className="justify-center flex">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </div>
  );
};
export default BestSeller;
