import React, { useState, useEffect } from "react";
import GroceryCategoryCard from "./GroceryCategoryCard";

const SeaFood = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        const seafood = data.products.filter((item) =>
          item.tags.includes("seafood")||item.tags.includes("condiments")||item.tags.includes("diary")
        );
        setProducts(seafood);
      })
      .catch((err) => console.error("Fetch failed:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl ml-40 font-bold mb-4">Seafood</h2>
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

export default SeaFood;
