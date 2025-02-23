import { useState, useEffect, memo } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import products from '../data.json';
import { formatCurrency } from '../utils/formatCurrency';
import { addToCart, updateQuantity, buyNow } from '../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Toast } from 'primereact/toast';
import { Panel } from 'primereact/panel';
import useDeviceType from '../hooks/useDeviceType';
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import PrivacyForUser from './PrivacyForUser';

const ProductDetailsCard = () => {
  const { link } = useParams();
  const product = products.find((p) => p.productName === link);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const [selectedColor, setSelectedColor] = useState(
    product?.variants[0]?.colorName || ''
  );
  const [selectedSize, setSelectedSize] = useState(null);
  const currentVariant = product?.variants.find(
    (variant) => variant.colorName === selectedColor
  );
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const { isMobile } = useDeviceType();
  const toast = useRef(null);

  useEffect(() => {
    if (!product) {
      window.location.href = '/page-not-found';
    }
  }, [product]);

  const showToast = (type, title, message) => {
    const toastStyles = {
      success: 'bg-green-50 text-green-800 border-green-200',
      warning: 'bg-yellow-50 text-yellow-800 border-yellow-200',
      error: 'bg-red-50 text-red-800 border-red-200',
      info: 'bg-blue-50 text-blue-800 border-blue-200',
    };

    const iconStyles = {
      success: 'pi pi-check-circle text-green-500 text-xl',
      warning: 'pi pi-exclamation-triangle text-yellow-500 text-xl',
      error: 'pi pi-times-circle text-red-500 text-xl',
      info: 'pi pi-info-circle text-blue-500 text-xl',
    };

    if (toast.current) {
      toast.current.show({
        severity: type,
        summary: (
          <div className="flex flex-col items-center">
            <i className={iconStyles[type]}></i>
            <span className="text-sm font-semibold mt-1">{title}</span>
          </div>
        ),
        detail: <span className="text-xs text-center">{message}</span>,
        life: 3000,
        className: `border relative rounded-lg opacity-90 ${toastStyles[type]} p-4 flex flex-col items-center justify-center`,
      });
    }
  };

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      showToast(
        'warning',
        'Incomplete Selection',
        'Please select both a color and a size before buying.'
      );
      return;
    }

    const sizeInfo = currentVariant?.productColorSize?.find(
      (size) => size.sizeValue === selectedSize
    );

    if (!sizeInfo || sizeInfo.quantity === 0) {
      showToast(
        'warning',
        'Size Unavailable',
        'The selected size is out of stock. Please choose another one.'
      );
      return;
    }

    const productToCheckout = {
      id: product?.brandId,
      name: product?.productName,
      price: currentVariant?.price,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
      image: currentVariant?.images[0],
      stock: sizeInfo?.quantity,
    };
    console.log('Buy Now clicked:', productToCheckout);
    dispatch(buyNow(productToCheckout));
    window.location.href = '/checkout';
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      showToast(
        'warning',
        'Incomplete Selection',
        'Please select both a color and a size before adding to cart.'
      );
      return;
    }

    const sizeInfo = currentVariant?.productColorSize?.find(
      (size) => size.sizeValue === selectedSize
    );

    if (!sizeInfo || sizeInfo.quantity === 0) {
      showToast(
        'warning',
        'Size Unavailable',
        'The selected size is out of stock. Please choose another one.'
      );
      return;
    }

    const existingItem = cartItems.find(
      (item) =>
        item.id === product.brandId &&
        item.color === selectedColor &&
        item.size === selectedSize
    );

    if (existingItem) {
      if (existingItem.quantity >= sizeInfo.quantity) {
        showToast(
          'warning',
          'Stock Limit Reached',
          'No more stock available for this item.'
        );
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
      showToast('success', 'Cart Updated', 'Item quantity has been updated.');
    } else {
      dispatch(
        addToCart({
          id: product?.brandId,
          name: product?.productName,
          price: currentVariant?.price,
          color: selectedColor,
          size: selectedSize,
          quantity: 1,
          image: currentVariant?.images[0],
          stock: sizeInfo?.quantity,
        })
      );
      showToast(
        'success',
        'Item Added',
        'The product has been added to your cart successfully.'
      );
    }
  };

  return (
    <div className="flex flex-col md:flex-row rounded-lg bg-white p-6 max-w-6xl mx-auto">
      <Toast ref={toast} />
      <div className="relative w-full md:w-2/3 mb-4 md:mb-0 md:mr-6">
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            {currentVariant?.images?.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.img
                  src={image}
                  alt={`Product ${index}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <>
            <motion.div
              className="w-full"
              key={mainImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={currentVariant?.images[mainImageIndex]}
                alt="Product"
                className="w-full h-[500px] object-contain"
              />
            </motion.div>
            <div className="flex mb-4 gap-2 p-4 overflow-x-auto">
              {currentVariant?.images?.map((image, index) => (
                <motion.div
                  key={index}
                  className={`w-[92px] h-[92px] rounded-lg cursor-pointer border overflow-hidden ${
                    mainImageIndex === index
                      ? 'border-2 border-black scale-105'
                      : ''
                  }`}
                  onClick={() => setMainImageIndex(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={image}
                    alt={`Product ${index}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* Mô tả sản phẩm chỉ hiển thị ở dưới slider nếu là desktop */}
        {!isMobile && (
          <Panel
            header={
              <div className="flex items-center gap-2 text-lg font-semibold p-2">
                <i className="pi pi-info-circle text-blue-500"></i>
                Description about the product: {product?.productName}
              </div>
            }
            toggleable
            collapsed
            className="mt-4"
          >
            <p className="text-gray-700 p-4 leading-relaxed">
              {product?.productDescription}
            </p>
          </Panel>
        )}
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-full md:w-1/3">
        <div className="text-4xl font-bold mb-2">{product?.productName}</div>
        <div className="text-red-500 text-xl font-bold">
          {formatCurrency(currentVariant?.price)}
        </div>

        <div className="mb-2">
          <span className="font-bold text-2xl">Color:</span>
          <div className="flex gap-2 mt-1">
            {product?.variants?.map((variant) => (
              <motion.div
                key={variant.colorName}
                className={`flex items-center justify-center w-24 h-10 rounded-full cursor-pointer border ${
                  selectedColor === variant.colorName ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => {
                  setSelectedColor(variant.colorName);
                  setSelectedSize(null);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {variant.colorName}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="my-4">
          <span className="font-bold text-xl">Size:</span>
          <div className="flex flex-wrap gap-2 mt-1">
            {currentVariant?.productColorSize?.map((size) => (
              <motion.div
                key={size.sizeValue}
                className={`px-3 py-1 border rounded-full text-xl ${
                  size.quantity === 0
                    ? 'bg-gray-500 text-white cursor-not-allowed'
                    : 'cursor-pointer'
                } ${selectedSize === size.sizeValue ? 'bg-gray-300' : ''}`}
                onClick={() =>
                  size.quantity > 0 && setSelectedSize(size.sizeValue)
                }
                whileHover={{ scale: size.quantity > 0 ? 1.1 : 1 }}
                whileTap={{ scale: size.quantity > 0 ? 0.95 : 1 }}
              >
                {size.sizeValue}
              </motion.div>
            ))}
          </div>
          <span className="font-bold text-x text-grey-50">Stock:</span>
          <span className="text-gray-500 text-x">
            {currentVariant?.productColorSize?.find(
              (size) => size.sizeValue === selectedSize
            )?.quantity || 0}
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <motion.button
            className="p-button-outlined p-button-rounded p-button-lg bg-[#A8DCE7] text-white rounded-lg p-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBuyNow}
          >
            Buy Now
          </motion.button>

          <motion.button
            className="p-button-rounded p-button-lg bg-[#272B3B] text-white rounded-lg p-3"
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add To Cart
          </motion.button>
        </div>
        <PrivacyForUser />

        {/* Mô tả sản phẩm hiển thị ở phần thông tin sản phẩm nếu là mobile */}
        {isMobile && (
          <Panel
            header={
              <div className="flex items-center gap-2 text-lg font-semibold p-2">
                <i className="pi pi-info-circle text-blue-500"></i>
                Description about the product: {product?.productName}
              </div>
            }
            toggleable
            collapsed
            className="mt-4"
          >
            <p className="text-gray-700 p-4 leading-relaxed">
              {product?.productDescription}
            </p>
          </Panel>
        )}
      </div>
    </div>
  );
};

export default memo(ProductDetailsCard);
