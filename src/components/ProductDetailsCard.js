import React, { useState, memo } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cart/cartSlice"; // Import action addToCart
import products from "./ProductTest";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetailsCard = () => {
  const { link } = useParams();
  const dispatch = useDispatch();
  const product = products.find((p) => p.link === link);

  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return window.location.href= '/not-found';
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.nameProduct,
        price: product.price,
        quantity: 1,
        image: product.images[mainImageIndex],
        color: selectedColor,
        size: selectedSize,
      })
    );
  };

  return (
    <div className="flex flex-col md:flex-row rounded-lg bg-white p-6 max-w-6xl mx-auto">
      <div className="relative w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
        <div className="w-full aspect-w-1 aspect-h-1">
          <img
            src={product.images && product.images[mainImageIndex]}
            alt="Product"
            className="w-full h-full object-cover transition duration-300 ease-in-out"
          />
        </div>
        <div className="flex mt-4 gap-2">
          {product.images &&
            product.images.map((image, index) => (
              <div
                key={index}
                className={`w-[92px] h-[92px] rounded-lg cursor-pointer border overflow-hidden transition duration-300 ease-in-out transform ${
                  mainImageIndex === index
                    ? "border-2 border-black scale-105"
                    : ""
                }`}
                onClick={() => setMainImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Product ${index}`}
                  className="w-[92px] h-[92px] object-cover transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="text-4xl font-bold mb-2">{product.nameProduct}</div>
        <div className="text-red-500 text-xl font-bold">
          {formatCurrency(product.price)}
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Color:</span>
          <div className="flex gap-2 mt-1">
            {product.colors &&
              product.colors.map((color) => (
                <div
                  key={color}
                  className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${
                    selectedColor === color ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setSelectedColor(color)}
                >
                  <span className="text-sm">{color}</span>
                </div>
              ))}
          </div>
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Size:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {product.sizes &&
              product.sizes.map((size) => (
                <div
                  key={size}
                  className={`px-3 py-1 border rounded-full cursor-pointer text-xl ${
                    selectedSize === size ? "bg-gray-300" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </div>
              ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-2">
          <button
            className="px-4 py-2 bg-black text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetailsCard);
