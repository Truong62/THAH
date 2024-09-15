// ProductCard.js
import React, { useState, memo } from "react";

const ProductCard = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  const images = [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6a18d0cf-a263-438a-a506-e7bb908b098b/AIR+ZOOM+PEGASUS+41+PQ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/95f9d764-c91c-4e34-8705-1da4459a8720/AIR+ZOOM+PEGASUS+41+PQ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/878da08a-db23-48d3-ac25-809047cc0bda/AIR+ZOOM+PEGASUS+41+PQ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9668c246-c7aa-4738-b213-cca59adca473/AIR+ZOOM+PEGASUS+41+PQ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/56fe99a7-5ca6-4c11-953e-7b4ad505c1eb/AIR+ZOOM+PEGASUS+41+PQ.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5b0f957b-06a6-4196-b603-2552f9a90cb7/AIR+ZOOM+PEGASUS+41+PQ.png",
  ];

  const colors = [
    { name: "black", color: "bg-black" },
    { name: "red", color: "bg-red-500" },
    { name: "orange", color: "bg-orange-500" },
    { name: "yellow", color: "bg-yellow-500" },
    { name: "green", color: "bg-green-500" },
    { name: "blue", color: "bg-blue-500" },
    { name: "purple", color: "bg-purple-500" },
  ];

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex flex-col md:flex-row border rounded-lg bg-white p-6 max-w-4xl shadow-lg">
      <div className="relative flex-1 mb-4 md:mb-0 md:mr-6">
        <img
          src={images[mainImageIndex]}
          alt="Product"
          className="w-full rounded-lg transition duration-300 ease-in-out"
        />
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handlePrevImage}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
          onClick={handleNextImage}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <div className="flex mt-4 gap-2">
          {images.map((image, index) => (
            <div
              key={index}
              className={`w-20 h-20 rounded-lg cursor-pointer border overflow-hidden transition duration-300 ease-in-out transform ${mainImageIndex === index ? "border-2 border-black scale-105" : ""}`}
              onClick={() => setMainImageIndex(index)}
            >
              <img
                src={image}
                alt={`Product ${index}`}
                className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="text-2xl font-bold mb-2">Badacore Tshirt</div>
        <div className="text-xl text-gray-800 mb-2">USD $80</div>
        <div className="mb-2">
          <span className="font-bold">Color:</span>
          <div className="flex gap-2 mt-1">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`w-5 h-5 rounded-full cursor-pointer border ${color.color} ${selectedColor === color.name ? "ring-2 ring-black" : ""}`}
                onClick={() => setSelectedColor(color.name)}
              ></div>
            ))}
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold">Size:</span>
          <div className="flex gap-2 mt-1">
            {sizes.map((size) => (
              <div
                key={size}
                className={`px-3 py-1 border rounded cursor-pointer ${selectedSize === size ? "bg-gray-300" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 mb-2">
          <button className="px-4 py-2 bg-black text-white rounded transition duration-300 ease-in-out transform hover:scale-105">
            Buy Now
          </button>
          <button className="px-4 py-2 bg-gray-300 rounded transition duration-300 ease-in-out transform hover:scale-105">
            Add To Cart
          </button>
        </div>
        <div className="mt-4">
          <p>
            The Badacore T-shirt is a versatile piece that seamlessly blends
            style and comfort. Designed with meticulous attention to detail,
            this t-shirt is an ideal addition to your wardrobe, offering a
            perfect harmony of fashion and ease. Its soothing soft brown color
            provides a calming effect, making it suitable for various occasions
            from casual gatherings with friends to relaxed workdays.
          </p>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
