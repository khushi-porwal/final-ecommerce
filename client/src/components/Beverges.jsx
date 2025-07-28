
import React, { useEffect, useState } from "react";
import GroceryCategoryCard from "./GroceryCategoryCard";

const FruitsAndVegSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      const keywords = ["juice", "ice", "cream","milk","water","dairy"];
      const filtered = data.products
        .filter((item) =>
          keywords.some((word) =>
            item.title.toLowerCase().includes(word)
          )
        )
        .slice(0, 4); // Show only 4 items
      setProducts(filtered);
    })
    .catch((err) => console.error("Error fetching groceries:", err));
}, []);

  return (
    <div className=" p-6">
      <h2 className="text-2xl ml-40 font-bold mb-4">Beverges</h2>
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
