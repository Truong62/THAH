import React, {useState, memo} from "react";
import {useParams} from "react-router-dom";
import products from "./ProductTest"; // Import the products array
import {formatCurrency} from "../utils/formatCurrency"; // Import formatCurrency

const ProductDetailsCard = () => {
    const {link} = useParams();
    const product = products.find((p) => p.link === link);

    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedSize, setSelectedSize] = useState("M");

    if (!product) {
        return <div>Product not found</div>; // tạo một trang 404 ở route nếu không có thì đi tới trang đó
    }

    const handlePrevImage = () => {
        setMainImageIndex((prevIndex) =>
            prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setMainImageIndex((prevIndex) =>
            prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
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
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 hover:shadow-md"
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
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 hover:shadow-md"
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
                {product.images && (
                    <div className="flex mt-4 gap-2">
                        {product.images.map((image, index) => (
                            <div key={index}
                                 className={`w-[92px] h-[92px] rounded-lg cursor-pointer border overflow-hidden transition duration-300 ease-in-out transform ${
                                     mainImageIndex === index ? "border-2 border-black scale-105" : ""
                                 }`}
                                 onClick={() => setMainImageIndex(index)}>
                                <img src={image} alt={`Product ${index}`}
                                     className="w-[92px] h-[92px] object-cover transition duration-300 ease-in-out transform hover:scale-105"/>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="w-full md:w-1/3">
                <div className="text-4xl font-bold mb-2">{product.nameProduct}</div>
                <div className="text-red-500 text-xl font-bold">
                    {formatCurrency(product.price)}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl">Color:</span>
                    {product.colors && (
                        <div className="flex gap-2 mt-1">
                            {product.colors.map((color) => (
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
                    )}
                </div>
                <div className="mb-2">
                    <span className="font-bold text-2xl">Size:</span>
                    {product.sizes && (
                        <div className="flex flex-wrap gap-2 mt-1">
                            {product.sizes.map((size) => (
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
                    )}
                </div>
                <div className="flex flex-col gap-2 mb-2">
                    <button
                        className="px-4 py-2 bg-black text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl">
                        Buy Now
                    </button>
                    <button
                        className="px-4 py-2 bg-white border border-black rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl">
                        Add To Cart
                    </button>
                </div>
                <div className="mt-4">
                    <p>{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default memo(ProductDetailsCard);
