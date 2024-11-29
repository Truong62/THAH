import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'swiper/css';
import 'swiper/css/navigation';
import product from '../data.json';
import { formatCurrency } from '../utils/formatCurrency';
const Home = () => {
  const products = product.slice(-10).map((product) => ({
    id: product.brandId,
    name: product.productName,
    description: product.productDescription,
    brand: product.brandName,
    image: product.variants[0].images[0],
    price: product.variants[0].price,
  }));
  const [expanded, setExpanded] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const swiperRef = useRef(null);

  const handleNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const currentIndex = products.findIndex(
        (p) => p.id === currentProduct.id
      );

      // Chỉ cho phép next/prev trong phạm vi 10 sản phẩm
      if (direction === 'next' && currentIndex < products.length - 1) {
        setCurrentProduct(products[currentIndex + 1]);
        swiper.slideNext();
      } else if (direction === 'prev' && currentIndex > 0) {
        setCurrentProduct(products[currentIndex - 1]);
        swiper.slidePrev();
      }
    }
  };

  return (
    <div
      className="max-w-[1440px] mx-auto"
      style={{ fontFamily: 'La Rosaleda Serif' }}
    >
      {/* Navigation */}
      <nav className="flex justify-between items-center py-4 px-6">
        <div className="flex gap-8">
          <a href="#" className="text-gray-600 hover:text-black">
            FASHION
          </a>
          <a href="/products" className="text-gray-600 hover:text-black">
            PRODUCTS
          </a>
          <a href="/company" className="text-gray-600 hover:text-black">
            COMPANY
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            SHOWS
          </a>
        </div>
        <button className="bg-[#5AA1E3] text-white px-4 py-1 ">
          CONTACT US
        </button>
      </nav>

      <h1 className="text-[#5AA1E3] text-8xl font-light text-center my-8">
        SHIFTED COUNTER
      </h1>

      <div className="grid grid-cols-12 gap-6 px-6">
        <div className="md:col-span-6">
          <div className="aspect-square w-full overflow-hidden group">
            <img
              src={currentProduct.image}
              alt={currentProduct.name}
              className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4">
            <Collapse in={expanded} collapsedSize={48}>
              <p className="text-l text-gray-600">
                {currentProduct.description}
              </p>
            </Collapse>
            {currentProduct.description.length > 150 && (
              <div className="flex items-center">
                <IconButton
                  onClick={() => setExpanded(!expanded)}
                  sx={{
                    color: '#5AA1E3',
                    '&:hover': {
                      backgroundColor: 'transparent',
                      color: '#4890d2',
                    },
                  }}
                >
                  {expanded ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                  <span className="text-sm ml-1">
                    {expanded ? 'Show Less' : 'See More'}
                  </span>
                </IconButton>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-6">
          <p className="text-sm mb-6">
            WE BELIEVE THAT FASHION IS NOT JUST ABOUT WHAT YOU WEAR, ITS A
            POWERFUL MEANS OF SELF-EXPRESSION AND TRANSFORMATION.
          </p>

          <div className="flex gap-4 mb-8">
            <button
              onClick={() => handleNavigation('prev')}
              className="slider-prev border border-gray-300 px-8 py-2 hover:border-black"
            >
              ←
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="slider-next bg-[#5AA1E3] text-white px-8 py-2"
            >
              →
            </button>
          </div>

          {/* Product Slider */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={2}
            loop={false}
            className="product-slider"
            onSlideChange={(swiper) => {
              setCurrentProduct(products[swiper.activeIndex]);
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="bg-gray-50 cursor-pointer group relative"
                  onClick={() => setCurrentProduct(product)}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <p className="absolute bottom-0 opacity px-2 py-1 text-xl font-bold">
                      {formatCurrency(product.price)}
                    </p>
                    <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-[#5AA1E3] text-white px-8 py-2 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        BUY
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="uppercase">{product.name}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Read More Button */}
          <div className="text-center mt-8">
            <button className="bg-[#5AA1E3] text-white px-16 py-2">
              <a href="/products">SEE MORE PRODUCTS</a>
            </button>
          </div>
        </div>
      </div>

      {/* Newest Section Divider */}
      <div className="flex items-center justify-center gap-4 my-12">
        <div className="h-px bg-gray-300 w-32"></div>
        <span className="text-xl">NEWEST</span>
        <div className="h-px bg-gray-300 w-32"></div>
      </div>
    </div>
  );
};

export default Home;
