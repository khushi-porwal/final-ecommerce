import React, { useState } from "react";
import food from "../assets/food.png";
import food2 from "../assets/food2.png";
import food1 from "../assets/food1.png";

const slides = [
  {
    image: food,
    title: "A different kind of grocery store",
    description: "Only this week, don't miss...",
    price: "$7.99",
    offer: "-20% OFF",
  },
  {
    image: food1,
    title: "Quality Freshness Guaranteed!",
    description: "Only this week, don't miss...",
    price: "$14.35",
    offer: "-40% OFF",
  },
  {
    image: food2,
    title: "Feed your family the best",
    description: "Only this week, don't miss...",
    price: "$8.99",
    offer: "-30% OFF",
  },
];

const CustomerLayout = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const { image, title, description, price, offer } = slides[current];

  return (
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="relative w-full max-w-7xl h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={image}
          alt="Slide"
        />

        
        <div className="absolute top-6 sm:top-10 left-6 sm:left-10 p-4 sm:p-6 max-w-[85%] sm:max-w-[60%] space-y-2 sm:space-y-4 text-black">
          <span className="text-sm sm:text-sm font-medium uppercase">
            EXCLUSIVE OFFER{" "}
            <span className="bg-green-200 ml-2 sm:ml-3 text-xs sm:text-sm text-green-800 px-2 py-1 rounded-full">
              {offer}
            </span>
          </span>

          <h1 className="text-2xl mt-5 sm:text-4xl md:text-6xl font-bold">{title}</h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700">{description}</p>

          <p className="text-base sm:text-lg md:text-xl">
            from{" "}
            <span className="text-red-500 font-bold text-xl sm:text-2xl md:text-3xl">
              {price}
            </span>
          </p>

          <button className="bg-blue-500 mt-5 hover:bg-blue-600 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-semibold text-white transition duration-300 text-sm sm:text-base">
            Shop Now →
          </button>
        </div>

        
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-base"
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-base"
        >
          ❯
        </button>

       
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;
