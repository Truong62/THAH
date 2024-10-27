import React, { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import products from '../data.json'; // Import the products array
import { formatCurrency } from '../utils/formatCurrency'; // Import formatCurrency
import { addToCart, updateQuantity } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar'; // Import Snackbar
import Slide from '@mui/material/Slide'; // Import Slide for transition
import Collapse from '@mui/material/Collapse'; // Import Collapse for description
import Button from '@mui/material/Button'; // Import Button for toggling
import useDeviceType from '../hooks/useDeviceType'; // Import the device type hook
import WarningAmberIcon from '@mui/icons-material/WarningAmber'; // Import WarningAmberIcon

const SlideTransition = (props) => {
  return <Slide {...props} direction="left" />;
};

const ProductDetailsCard = () => {
  const { link } = useParams();
  const product = products.find((p) => p.productName === link);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [snackbarQueue, setSnackbarQueue] = useState([]);
  const [currentSnackbar, setCurrentSnackbar] = useState(null);

  const [selectedColor, setSelectedColor] = useState(
    product && product.variant.$values.length > 0
      ? product.variant.$values[0].colorName
      : ''
  );
  const [selectedSize, setSelectedSize] = useState();

  const handleSnackbarClose = () => {
    setCurrentSnackbar(null);
  };

  const currentVariant = product
    ? product.variant.$values.find(
        (variant) => variant.colorName === selectedColor
      )
    : null;

  const [mainImageIndex, setMainImageIndex] = useState(0);

  const { isMobile } = useDeviceType();
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (!product) {
      window.location.href = '/page-not-found';
    }
  }, [product]);

  useEffect(() => {
    if (!currentSnackbar && snackbarQueue.length > 0) {
      setCurrentSnackbar(snackbarQueue[0]);
      setSnackbarQueue((prevQueue) => prevQueue.slice(1));
    }
  }, [snackbarQueue, currentSnackbar]);

  const handlePrevImage = () => {
    if (currentVariant && currentVariant.imagePath.$values.length > 0) {
      setMainImageIndex((prevIndex) =>
        prevIndex === 0
          ? currentVariant.imagePath.$values.length - 1
          : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (currentVariant && currentVariant.imagePath.$values.length > 0) {
      setMainImageIndex((prevIndex) =>
        prevIndex === currentVariant.imagePath.$values.length - 1
          ? 0
          : prevIndex + 1
      );
    }
  };

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedSize) {
      setSnackbarQueue((prevQueue) => [
        ...prevQueue,
        { message: 'REQUIRED TO CHOOSE COLOR AND SIZE', type: 'error' },
      ]);
      return;
    }

    if (!product || !currentVariant) {
      return; // Handle the case where product or currentVariant is not found
    }

    const sizeInfo = currentVariant.productColorSize.$values.find(
      (size) => size.sizeValue === selectedSize
    );

    if (!sizeInfo) {
      setSnackbarQueue((prevQueue) => [
        ...prevQueue,
        { message: 'SIZE NOT AVAILABLE', type: 'error' },
      ]);
      return;
    }

    const existingItem = cartItems.find(
      (item) =>
        item.id === product.productId &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    const cartItem = {
      id: product.productId,
      name: product.productName,
      price: currentVariant.unitPrice || 0, // Cung cấp giá trị mặc định
      color: selectedColor,
      size: selectedSize,
      quantity: existingItem ? existingItem.quantity + 1 : 1,
      image:
        currentVariant.imagePath.$values[0] ||
        'https://via.placeholder.com/300', // Cung cấp hình ảnh mặc định
      stock: sizeInfo.quantity,
    };

    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

    if (existingItem) {
      if (existingItem.quantity >= sizeInfo.quantity) {
        setSnackbarQueue((prevQueue) => [
          ...prevQueue,
          { message: 'OUT OF STOCK', type: 'error' },
        ]);
        return;
      }

      dispatch(
        updateQuantity({
          id: product.productId,
          color: selectedColor,
          size: selectedSize,
          quantity: cartItem.quantity,
        })
      );
      setSnackbarQueue((prevQueue) => [
        ...prevQueue,
        { message: 'QUANTITY UPDATED', type: 'success' },
      ]);
    } else {
      if (isAuthenticated) {
        const userEmail = localStorage.getItem('userEmail');
        // Call API to save product to user's cart
      } else {
        // Save to localStorage
      }
    }
  };

  if (!product) {
    return null; // Render nothing while redirecting
  }

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
            {currentVariant.imagePath.$values.map((image, index) => (
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
                src={currentVariant.imagePath.$values[mainImageIndex]}
                alt="Product"
                className="w-full h-full object-cover transition duration-300 ease-in-out"
              />
            </div>
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 rounded-full p-2 hover:shadow-md"
              onClick={handlePrevImage}
            >
              {/* Previous button SVG */}
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 rounded-full p-2 hover:shadow-md"
              onClick={handleNextImage}
            >
              {/* Next button SVG */}
            </button>
            <div className="flex mt-4 gap-2">
              {currentVariant.imagePath.$values.map((image, index) => (
                <div
                  key={index}
                  className={`w-[92px] h-[92px] rounded-lg cursor-pointer border overflow-hidden transition duration-300 ease-in-out transform ${
                    mainImageIndex === index
                      ? 'border-2 border-black scale-105'
                      : ''
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
          Stock Available:{' '}
          {currentVariant.productColorSize.$values.find(
            (size) => size.sizeValue === selectedSize
          )?.quantity || 0}
        </span>
        <div className="text-red-500 text-xl font-bold">
          {formatCurrency(currentVariant.unitPrice || 0)}{' '}
          {/* Cung cấp giá trị mặc định */}
        </div>
        <div className="mb-2">
          <span className="font-bold text-2xl">Color:</span>
          {product.variant.$values && (
            <div className="flex gap-2 mt-1">
              {product.variant.$values.map((variant) => (
                <div
                  key={variant.colorName}
                  className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${
                    selectedColor === variant.colorName
                      ? 'ring-2 ring-black'
                      : ''
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
          {currentVariant.productColorSize.$values && (
            <div className="flex flex-wrap gap-2 mt-1">
              {currentVariant.productColorSize.$values.map((size) => {
                const isSizeOutOfStock = size.quantity === 0;
                return (
                  <div
                    key={size.sizeValue}
                    className={`px-3 py-1 border rounded-full text-xl ${
                      isSizeOutOfStock
                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        : 'cursor-pointer'
                    } ${selectedSize === size.sizeValue ? 'bg-gray-300' : ''}`}
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
                maxHeight: showFullDescription ? '300px' : '100px',
                overflowY: showFullDescription ? 'auto' : 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p>{product.productDescription || 'No description available'}</p>{' '}
              {/* Cung cấp mô tả mặc định */}
            </div>
          </Collapse>
          <Button
            onClick={() => setShowFullDescription(!showFullDescription)}
            color="primary"
          >
            {showFullDescription ? 'Show Less' : 'Read More'}
          </Button>
        </div>
      </div>
      {currentSnackbar && (
        <Snackbar
          open={!!currentSnackbar}
          autoHideDuration={5000}
          onClose={handleSnackbarClose}
          TransitionComponent={SlideTransition}
          message={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {currentSnackbar.type === 'error' && (
                <WarningAmberIcon style={{ marginRight: 8 }} />
              )}
              {currentSnackbar.message}
            </span>
          }
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          ContentProps={{
            style: {
              backgroundColor:
                currentSnackbar.type === 'success' ? '#33CC33' : '#FFCC33',
            },
          }}
        />
      )}
    </div>
  );
};

export default memo(ProductDetailsCard);
