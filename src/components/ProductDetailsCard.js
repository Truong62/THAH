import React, { useState, useEffect, memo } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import products from "./ProductTest"; // Import the products array
import { formatCurrency } from "../utils/formatCurrency"; // Import formatCurrency
import { addToCart, updateQuantity } from "../redux/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@mui/material/Snackbar"; // Import Snackbar
import Slide from "@mui/material/Slide"; // Import Slide for transition
import Collapse from "@mui/material/Collapse"; // Import Collapse for description
import Button from "@mui/material/Button"; // Import Button for toggling
import useDeviceType from "../hooks/useDeviceType"; // Import the device type hook
import WarningAmberIcon from "@mui/icons-material/WarningAmber"; // Import WarningAmberIcon

const SlideTransition = (props) => {
  return <Slide {...props} direction="left" />;
};

const ProductDetailsCard = () => {
  const { link } = useParams();
  const product = products.find((p) => p.productName === link);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State to store Snackbar message
  const [snackbarType, setSnackbarType] = useState(""); // State to store Snackbar type

  const [selectedColor, setSelectedColor] = useState(
    product.variants[0].colorName
  );
  const [selectedSize, setSelectedSize] = useState();

  const currentVariant = product.variants.find(
    (variant) => variant.colorName === selectedColor
  );

  const [mainImageIndex, setMainImageIndex] = useState(0);

  const { isMobile } = useDeviceType(); // Determine if the device is mobile

  const [showFullDescription, setShowFullDescription] = useState(false); // State to control description visibility

  if (!product) {
    window.location.href = "/notfound";
  }

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0 ? currentVariant.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === currentVariant.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      setSnackbarMessage("REQUIRED TO CHOOSE COLOR AND SIZE");
      setSnackbarType("error");
      setSnackbarOpen(true);
      return;
    }

    const existingItem = cartItems.find(
      (item) =>
        item.id === product.brandId &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItem) {
      if (
        existingItem.quantity >=
        currentVariant.productColorSize.find(
          (size) => size.sizeValue === selectedSize
        ).quantity
      ) {
        setSnackbarMessage("OUT OF STOCK");
        setSnackbarType("error");
        setSnackbarOpen(true);
        return;
      }

      dispatch(
        updateQuantity({
          id: product.brandId,
          color: selectedColor,
          size: selectedSize,
          quantity: existingItem.quantity + 1,
        })
      );
      setSnackbarMessage("QUANTITY UPDATED");
      setSnackbarType("success");
    } else {
      const cartItem = {
        id: product.brandId,
        name: product.productName,
        price: currentVariant.price,
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
        image: currentVariant.images[0],
        stock: currentVariant.productColorSize.find(
          (size) => size.sizeValue === selectedSize
        ).quantity,
      };

      dispatch(addToCart(cartItem));
      setSnackbarMessage("ADDED TO CART");
      setSnackbarType("success");
    }

    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  useEffect(() => {
    if (snackbarOpen) {
      const timer = setTimeout(() => {
        setSnackbarOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbarOpen]);

  return (
    <div className="flex flex-col md:flex-row rounded-lg bg-white p-6 max-w-6xl mx-auto">
      <div className="relative w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {currentVariant.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover transition duration-300 ease-in-out"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <div className="w-full aspect-w-1 aspect-h-1">
              <img
                src={currentVariant.images[mainImageIndex]}
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
            <div className="flex mt-4 gap-2">
              {currentVariant.images.map((image, index) => (
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
          </>
        )}
      </div>
      <div className="w-full md:w-1/3">
        <div className="text-4xl font-bold mb-2">{product.productName}</div>
        <span className="text-black font-bold">
          Stock Available:{" "}
          {currentVariant.productColorSize.find(
            (size) => size.sizeValue === selectedSize
          )?.quantity || 0}
        </span>
        <div className="text-red-500 text-xl font-bold">
          {formatCurrency(currentVariant.price)}
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Color:</span>
          {product.variants && (
            <div className="flex gap-2 mt-1">
              {product.variants.map((variant) => (
                <div
                  key={variant.colorName}
                  className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${
                    selectedColor === variant.colorName
                      ? "ring-2 ring-black"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedColor(variant.colorName);
                    setSelectedSize(null);
                  }}
                >
                  <span className="text-sm">{variant.colorName}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Size:</span>
          {currentVariant.productColorSize && (
            <div className="flex flex-wrap gap-2 mt-1">
              {currentVariant.productColorSize.map((size) => {
                const isSizeOutOfStock = size.quantity === 0;
                return (
                  <div
                    key={size.sizeValue}
                    className={`px-3 py-1 border rounded-full text-xl ${
                      isSizeOutOfStock
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "cursor-pointer"
                    } ${selectedSize === size.sizeValue ? "bg-gray-300" : ""}`}
                    onClick={() =>
                      !isSizeOutOfStock && setSelectedSize(size.sizeValue)
                    }
                  >
                    {size.sizeValue}
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <br></br>

        <div className="flex flex-col gap-2 mb-2">
          <button className="px-4 py-2 bg-black text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl">
            Buy Now
          </button>
          <button
            className="px-4 py-2 bg-white border border-black rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-xl"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
        <div className="mt-4">
          <div className="text-xl font-bold">Description</div>
          <Collapse in={showFullDescription} collapsedSize={100}>
            <div
              style={{
                maxHeight: showFullDescription ? "300px" : "100px",
                overflowY: showFullDescription ? "auto" : "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              <p>{product.productDescription}</p>
            </div>
          </Collapse>
          <Button
            onClick={() => setShowFullDescription(!showFullDescription)}
            color="primary"
          >
            {showFullDescription ? "Show Less" : "Read More"}
          </Button>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        TransitionComponent={SlideTransition} // Use Slide transition
        message={
          <span style={{ display: "flex", alignItems: "center" }}>
            {snackbarType === "error" && (
              <WarningAmberIcon style={{ marginRight: 8 }} />
            )}
            {snackbarMessage}
          </span>
        }
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        ContentProps={{
          style: {
            backgroundColor: snackbarType === "success" ? "#33CC33" : "#FFCC33",
          },
        }}
      />
    </div>
  );
};

export default memo(ProductDetailsCard);
