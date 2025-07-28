import React, { useEffect, useState } from "react";
import GroceryCategoryCard from "./GroceryCategoryCard";

const FruitsAndVegSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setProducts(data.products.slice(0, 12))) // show only 4
      .catch((err) => console.error("Error fetching groceries:", err));
  }, []);

  return (
    <div className=" p-6">
      <h2 className="text-2xl ml-40 font-bold mb-4">Fruits and Vegetables</h2>
      <div className="w-full flex justify-center">
        <div className="grid w-[80%] grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <GroceryCategoryCard
            key={product.id}
            title={product.title}
            image={product.thumbnail}
            discount={Math.floor(product.discountPercentage)}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default FruitsAndVegSection;
