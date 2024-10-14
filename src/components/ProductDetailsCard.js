import React, { useState, memo } from "react";
import { useParams } from "react-router-dom";
import products from "./ProductTest"; // Import the products array
import { formatCurrency } from "../utils/formatCurrency"; // Import formatCurrency
import SuggestProducts from "../components/suggestProducts";

const ProductDetailsCard = () => {
    const { link } = useParams();
    const product = products.find((p) => p.link === link);

    const [mainImageIndex, setMainImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState("black");
    const [selectedSize, setSelectedSize] = useState("M");

    const productData = [
        {
            id: 1,
            link: "product-1",
            nameProduct: "Product 1",
            description: "Description for product 1",
            sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
            colors: ["White", "Black", "Green", "Yellow", "Purple"],
            price: 2000000,
            brand: "Brand 1",
            nameTag: ["Tag1", "Tag2"],
            mainImage:
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2ce111f2-d961-485d-ad03-6a22d1ea78bb/WMNS+AIR+JORDAN+1+MM+LOW.png",
            images: [
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d709d9aa-15a1-49e5-83eb-776bc1ee2944/WMNS+AIR+JORDAN+1+MM+LOW.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/344aa6bf-4bc7-4c8b-9b61-41f3bf76fb59/WMNS+AIR+JORDAN+1+MM+LOW.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dfe05417-cbdb-49bb-90d8-0993abcbc554/WMNS+AIR+JORDAN+1+MM+LOW.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0f1e9ef6-6bde-406e-ab6e-abd04ac18967/WMNS+AIR+JORDAN+1+MM+LOW.png",
              "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4f6cd331-e93e-49a1-9286-2555d72d8295/WMNS+AIR+JORDAN+1+MM+LOW.png",
            ],
            whiteImages:[
              
            ]
          },
          {
            id: 2,
            link: "product-2",
            nameProduct: "Product 2",
            description: "Description for product 2",
            price: "2000000",
            brand: "Brand 2",
            nameTag: ["Tag3", "Tag4"],
            mainImage: "https://example.com/main-image-2.jpg",
            images: [
              "https://example.com/image-2-1.jpg",
              "https://example.com/image-2-2.jpg",
              "https://example.com/image-2-3.jpg",
              "https://example.com/image-2-4.jpg",
              "https://example.com/image-2-5.jpg",
            ],
          },
          {
            id: 3,
            link: "product-3",
            nameProduct: "Product 3",
            description: "Description for product 3",
            price: "2000000",
            brand: "Brand 3",
            nameTag: ["Tag4", "Tag5"],
            mainImage: "https://example.com/main-image-2.jpg",
            images: [
              "https://example.com/image-2-1.jpg",
              "https://example.com/image-2-2.jpg",
              "https://example.com/image-2-3.jpg",
              "https://example.com/image-2-4.jpg",
              "https://example.com/image-2-5.jpg",
            ],
          },
          {
            id: 4,
            link: "product-4",
            nameProduct: "Product 4",
            description: "Description for product 4",
            price: "2000000",
            brand: "Brand 4",
            nameTag: ["Tag5", "Tag6"],
            mainImage: "https://example.com/main-image-2.jpg",
            images: [
              "https://example.com/image-2-1.jpg",
              "https://example.com/image-2-2.jpg",
              "https://example.com/image-2-3.jpg",
              "https://example.com/image-2-4.jpg",
              "https://example.com/image-2-5.jpg",
            ],
          },
    ];

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
        <>
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
                                    className={`w-[92px] h-[92px] rounded-lg cursor-pointer border overflow-hidden transition duration-300 ease-in-out transform ${mainImageIndex === index ? "border-2 border-black scale-105" : ""}`}
                                    onClick={() => setMainImageIndex(index)}>
                                    <img src={image} alt={`Product ${index}`}
                                        className="w-[92px] h-[92px] object-cover transition duration-300 ease-in-out transform hover:scale-105" />
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
                                        className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${selectedColor === color ? "ring-2 ring-black" : ""}`}
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
                                        className={`px-3 py-1 border rounded-full cursor-pointer text-xl ${selectedSize === size ? "bg-gray-300" : ""}`}
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
            <div className="text-center py-4">
            <h2 className="text-xl font-bold text-gray-800">Product Suggestions</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <SuggestProducts products={productData} />
                </div>
            </div>
        </>
    );
};

export default memo(ProductDetailsCard);
