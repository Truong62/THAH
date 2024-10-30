import React, { useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import { formatCurrency } from '../utils/formatCurrency'; // Import formatCurrency
import { addToCart, updateQuantity } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import CustomSnackbar from './Snackbar'; // Import CustomSnackbar
import Slide from '@mui/material/Slide'; // Import Slide for transition
import Collapse from '@mui/material/Collapse'; // Import Collapse for description
import Button from '@mui/material/Button'; // Import Button for toggling
import { ArrowBack, ArrowForward } from '@mui/icons-material'; // Import icons for navigation
import useDeviceType from '../hooks/useDeviceType';

const ProductDetailsCard = ({ productDetail }) => {
  const [selectedColor, setSelectedColor] = useState(
    productDetail.variant.$values[0].colorName
  );
  const [selectedSize, setSelectedSize] = useState(
    productDetail.variant.$values[0].productColorSize.$values[0].sizeValue
  );
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Trạng thái cho snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Thông điệp snackbar
  const [snackbarType, setSnackbarType] = useState('success'); // Loại snackbar
  const [showFullDescription, setShowFullDescription] = useState(false); // Trạng thái cho mô tả đầy đủ
  const dispatch = useDispatch();

  // Lấy cartItems từ Redux store
  const cartItems = useSelector((state) => state.cart.items || []);

  const currentVariant = productDetail.variant.$values.find(
    (variant) => variant.colorName === selectedColor
  );

  if (!currentVariant) {
    return <div>Không tìm thấy biến thể cho màu đã chọn.</div>;
  }

  const handleAddToCart = async () => {
    if (!selectedColor || !selectedSize) {
      console.log('Error: Color or size not selected.');
      setSnackbarMessage('REQUIRED TO CHOOSE COLOR AND SIZE');
      setSnackbarType('error');
      setSnackbarOpen(true);
      return;
    }

    if (!productDetail || !currentVariant) {
      console.log('Error: Product or current variant not found.');
      return;
    }

    // Kiểm tra xem productColorSize và $values có tồn tại không
    if (
      !currentVariant.productColorSize ||
      !currentVariant.productColorSize.$values
    ) {
      console.log('Error: Product color size information is not available.');
      setSnackbarMessage('PRODUCT COLOR SIZE NOT AVAILABLE');
      setSnackbarType('error');
      setSnackbarOpen(true);
      return;
    }

    const sizeInfo = currentVariant.productColorSize.$values.find(
      (size) => size.sizeValue === selectedSize
    );

    if (!sizeInfo) {
      console.log('Error: Size not available.');
      setSnackbarMessage('SIZE NOT AVAILABLE');
      setSnackbarType('error');
      setSnackbarOpen(true);
      return;
    }

    const existingItem = cartItems.find(
      (item) =>
        item.id === productDetail.productId &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItem) {
      // Nếu sản phẩm đã tồn tại, chỉ cần cập nhật số lượng
      if (existingItem.quantity >= sizeInfo.quantity) {
        console.log('Error: Out of stock.');
        setSnackbarMessage('OUT OF STOCK');
        setSnackbarType('error');
        setSnackbarOpen(true);
        return;
      }

      // Cập nhật số lượng sản phẩm trong giỏ hàng
      dispatch(
        updateQuantity({
          id: productDetail.productId,
          color: selectedColor,
          size: selectedSize,
          quantity: existingItem.quantity + 1, // Tăng số lượng lên 1
        })
      );
      setSnackbarMessage('QUANTITY UPDATED');
      setSnackbarType('success');
      setSnackbarOpen(true);
    } else {
      // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng
      const cartItem = {
        id: productDetail.productId,
        name: productDetail.productName,
        price: currentVariant.unitPrice || 0,
        color: selectedColor,
        size: selectedSize,
        quantity: 1, // Khởi tạo số lượng là 1
        image:
          currentVariant.imagePath.$values[0] ||
          'https://via.placeholder.com/300',
        stock: sizeInfo.quantity,
      };

      console.log('Adding new item to cart:', cartItem);
      dispatch(addToCart(cartItem)); // Gọi action addToCart từ Redux
      setSnackbarMessage('ITEM ADDED TO CART');
      setSnackbarType('success');
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handlePrevImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === 0
        ? currentVariant.imagePath.$values.length - 1
        : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setMainImageIndex((prevIndex) =>
      prevIndex === currentVariant.imagePath.$values.length - 1
        ? 0
        : prevIndex + 1
    );
  };

  return (
    <div>
      <CustomSnackbar
        open={snackbarOpen}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        severity={snackbarType}
      />

      <div className="flex flex-col md:flex-row rounded-lg bg-white p-6 max-w-6xl mx-auto">
        <div className="relative w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
          <img
            src={currentVariant.imagePath.$values[mainImageIndex]}
            alt="Product"
            className="w-full h-full object-cover transition duration-300 ease-in-out"
          />
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:opacity-80 transition-opacity duration-300"
            onClick={handlePrevImage}
          >
            <ArrowBack />
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:opacity-80 transition-opacity duration-300"
            onClick={handleNextImage}
          >
            <ArrowForward />
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
                  alt={`Thumbnail ${index}`}
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="text-4xl font-bold mb-2">
            {productDetail.productName}
          </div>
          <span className="text-black font-bold">
            Stock Available:{' '}
            {currentVariant.productColorSize.$values.find(
              (size) => size.sizeValue === selectedSize
            )?.quantity || 0}
          </span>
          <div className="text-red-500 text-xl font-bold">
            {formatCurrency(currentVariant.unitPrice || 0)}{' '}
          </div>
          <div className="mb-2">
            <span className="font-bold text-2xl">Color:</span>
            <div className="flex gap-2 mt-1">
              {productDetail.variant.$values.map((variant) => (
                <div
                  key={variant.colorName}
                  className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${
                    selectedColor === variant.colorName
                      ? 'ring-2 ring-black'
                      : ''
                  }`}
                  onClick={() => {
                    setSelectedColor(variant.colorName);
                    setSelectedSize(
                      variant.productColorSize.$values[0].sizeValue
                    ); // Reset size khi đổi màu
                  }}
                >
                  <span className="text-sm">{variant.colorName}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chọn kích thước */}
          <div className="mb-2">
            <span className="font-bold text-2xl">Size:</span>
            <div className="flex flex-wrap gap-2 mt-1">
              {currentVariant.productColorSize.$values.map((size) => (
                <div
                  key={`${size.sizeValue}-${selectedColor}`} // Kết hợp sizeValue và selectedColor để tạo khóa duy nhất
                  className={`px-3 py-1 border rounded-full text-xl cursor-pointer ${
                    size.quantity === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : ''
                  } ${selectedSize === size.sizeValue ? 'bg-gray-300' : ''}`}
                  onClick={() =>
                    size.quantity > 0 && setSelectedSize(size.sizeValue)
                  }
                >
                  {size.sizeValue}
                </div>
              ))}
            </div>
          </div>

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
                <p>
                  {productDetail.productDescription ||
                    'No description available'}
                </p>
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
      </div>
    </div>
  );
};

export default memo(ProductDetailsCard);
