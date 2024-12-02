import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/navigation';
import { formatCurrency } from '../utils/formatCurrency';
import introVideo from '../assets/intro.mp4';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    description: '',
    brand: '',
    image: '',
    tags: [],
    price: 0,
  });
  const swiperRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/product', {
          params: {
            limit: 10,
            page: 1,
            order: 'desc',
          },
        });

        const formattedProducts = response.data.data.map((product) => ({
          id: product.productId,
          name: product.productName,
          description: product.productDescription,
          brand: product.brandName,
          image: product.imagePath,
          tags: product.tag,
          price: product.price,
        }));

        setProducts(formattedProducts);
        if (formattedProducts.length > 0) {
          setCurrentProduct(formattedProducts[0]);
        }
      } catch (error) {
        console.error('Fail to get data:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const currentIndex = products.findIndex(
        (p) => p.id === currentProduct.id
      );

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
      <nav className="flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-6">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-4 md:mb-0">
          <a
            href="#"
            className="text-sm md:text-base text-gray-600 hover:text-black"
          >
            FASHION
          </a>
          <a
            href="/products"
            className="text-sm md:text-base text-gray-600 hover:text-black"
          >
            PRODUCTS
          </a>
          <a
            href="/company"
            className="text-sm md:text-base text-gray-600 hover:text-black"
          >
            COMPANY
          </a>
          <a
            href="#"
            className="text-sm md:text-base text-gray-600 hover:text-black"
          >
            SHOWS
          </a>
        </div>
        <button className="w-full md:w-auto bg-[#5AA1E3] text-white px-4 py-1">
          CONTACT US
        </button>
      </nav>

      <div className="relative w-full h-[200px] md:h-[400px] my-4 md:my-8">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-8xl font-light text-center drop-shadow-lg">
            SHIFTED COUNTER
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-6">
        <div className="col-span-1 md:col-span-6">
          <div className="aspect-square w-full rounded overflow-hidden group">
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

        <div className="col-span-1 md:col-span-6">
          <p className="text-sm mb-6 text-center md:text-left">
            WE BELIEVE THAT FASHION IS NOT JUST ABOUT WHAT YOU WEAR, ITS A
            POWERFUL MEANS OF SELF-EXPRESSION AND TRANSFORMATION.
          </p>

          <div className="flex gap-2 md:gap-4 mb-8">
            <button
              onClick={() => handleNavigation('prev')}
              className="slider-prev border border-gray-300 w-full md:w-[200px] px-4 md:px-8 py-2 hover:border-black"
            >
              ←
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="slider-next bg-[#5AA1E3] w-full md:w-[200px] text-white px-4 md:px-8 py-2"
            >
              →
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            loop={false}
            className="product-slider"
            onSlideChange={(swiper) => {
              setCurrentProduct(products[swiper.activeIndex]);
            }}
          >
            {products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="!w-[300px] md:!w-[350px]" // Tăng width của slide
              >
                <div
                  className={`bg-gray-50 cursor-pointer group relative h-full ${currentProduct.id === product.id ? 'bg-gray-200' : ''}`}
                  onClick={() => setCurrentProduct(product)}
                >
                  <div className="relative w-full h-[400px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center"
                    />
                    <p className="absolute bottom-0 left-0 bg-white/80 px-2 py-1 text-xs md:text-base font-bold">
                      {formatCurrency(product.price)}
                    </p>
                    <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-[#5AA1E3] text-white px-4 py-1 text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        BUY
                      </button>
                    </div>
                  </div>
                  <div className="p-2 md:p-4">
                    <span className="uppercase text-xs md:text-sm line-clamp-1">
                      {product.name}
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.tags.map((tag) => (
                        <span
                          key={tag.tagId}
                          className="text-[10px] md:text-xs text-gray-500"
                        >
                          #{tag.tagName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-8">
            <button className="w-full md:w-auto bg-[#5AA1E3] text-white px-8 md:px-16 py-2">
              <a href="/products">SEE MORE PRODUCTS</a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 md:gap-4 my-8 md:my-12 px-4">
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
        <span className="text-lg md:text-xl">NEWEST</span>
        <div className="h-px bg-gray-300 w-16 md:w-32"></div>
      </div>
    </div>
  );
};

export default Home;
