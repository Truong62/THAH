import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Collapse, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import 'swiper/css';
import 'swiper/css/navigation';
import { formatCurrency } from '../utils/formatCurrency';
import introVideo from '../assets/intro.mp4';
import introVideo2 from '../assets/intro2.mp4';
import useFetchApi from '../hooks/useFetchApi';
import Header from '../components/Header/Header';
import SkeletonProduct from '../components/Skeleton/SkeletonProducts';
const Home = () => {
  const navigate = useNavigate();
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
  const [formattedProducts, setFormattedProducts] = useState([]);
  const swiperRef = useRef(null);

  const {
    data: products,
    loading,
    error,
  } = useFetchApi('http://localhost:3000/api/product', {
    limit: 10,
    page: 1,
    order: 'desc',
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  useEffect(() => {
    const newFormattedProducts = products.map((product) => ({
      id: product.productId,
      name: product.productName,
      description: product.productDescription,
      brand: product.brandName,
      image: product.imagePath || 'https://placehold.co/300x300',
      tags: product.tag,
      price: product.price,
    }));
    setFormattedProducts(newFormattedProducts);
    if (newFormattedProducts.length > 0) {
      setCurrentProduct(newFormattedProducts[0]);
    }
  }, [products]);

  const handleNavigation = (direction) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const currentIndex = formattedProducts.findIndex(
        (p) => p.id === currentProduct.id
      );

      if (direction === 'next') {
        if (currentIndex < formattedProducts.length - 1) {
          setCurrentProduct(formattedProducts[currentIndex + 1]);
          swiper.slideNext();
        }
      } else if (direction === 'prev') {
        if (currentIndex > 0) {
          setCurrentProduct(formattedProducts[currentIndex - 1]);
          swiper.slidePrev();
        }
      }
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto">
      <Header></Header>

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
          <div className="aspect-square overflow-hidden group">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={introVideo2} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="mt-4">
            <Collapse in={expanded} collapsedSize={48}>
              <p
                className="text-l text-gray-600"
                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
              ></p>
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
                  <span className="text-sm ml-2">
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
              className="slider-prev border border-gray-300 w-full md:w-[300px] px-4 md:px-8 py-2 hover:border-black"
            >
              ←
            </button>
            <button
              onClick={() => handleNavigation('next')}
              className="slider-next bg-[#5AA1E3] w-full md:w-[300px] text-white px-4 md:px-8 py-2"
            >
              →
            </button>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={1.5}
            loop={false}
            className="product-slider"
            onSlideChange={(swiper) => {
              setCurrentProduct(formattedProducts[swiper.activeIndex]);
            }}
          >
            {loading
              ? Array.from({ length: 10 }).map((_, index) => (
                  <SwiperSlide
                    key={`skeleton-${index}`}
                    className="!w-[300px] md:!w-[350px]"
                  >
                    <div className="bg-gray-50 p-4 h-full">
                      {/* Ảnh skeleton: Vuông */}
                      <div className="mb-4">
                        <SkeletonProduct shape="square" size="10rem" />
                      </div>

                      {/* Tên sản phẩm skeleton: Hình chữ nhật */}
                      <div className="mb-2">
                        <SkeletonProduct width="80%" height="1rem" />
                      </div>

                      {/* Giá sản phẩm skeleton: Hình chữ nhật nhỏ */}
                      <div className="mb-2">
                        <SkeletonProduct width="50%" height="1rem" />
                      </div>

                      {/* Tags skeleton: Nhiều hình chữ nhật nhỏ */}
                      <div className="flex flex-wrap gap-2">
                        {Array.from({ length: 3 }).map((_, tagIndex) => (
                          <SkeletonProduct
                            key={`tag-skeleton-${tagIndex}`}
                            width="4rem"
                            height="0.8rem"
                          />
                        ))}
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              : formattedProducts.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="!w-[300px] md:!w-[350px]"
                    onClick={() =>
                      setCurrentProduct({
                        id: product.id,
                        name: product.name,
                        description: product.description,
                        brand: product.brand,
                        image: product.image,
                        tags: product.tags,
                        price: product.price,
                      })
                    }
                  >
                    {!product.image ||
                    product.image.trim() === '' ||
                    !product.name ||
                    !product.price ? (
                      <div className="bg-gray-50 p-4 h-full">
                        {/* Ảnh skeleton */}
                        <div className="mb-4">
                          <SkeletonProduct shape="square" size="10rem" />
                        </div>

                        {/* Tên sản phẩm skeleton */}
                        <div className="mb-2">
                          <SkeletonProduct width="80%" height="1rem" />
                        </div>

                        {/* Giá sản phẩm skeleton */}
                        <div className="mb-2">
                          <SkeletonProduct width="50%" height="1rem" />
                        </div>

                        {/* Tags skeleton */}
                        <div className="flex flex-wrap gap-2">
                          {Array.from({ length: 3 }).map((_, tagIndex) => (
                            <SkeletonProduct
                              key={`tag-skeleton-${tagIndex}`}
                              width="4rem"
                              height="0.8rem"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`bg-gray-50 cursor-pointer group relative h-full ${
                          currentProduct.id === product.id ? 'bg-gray-200' : ''
                        }`}
                      >
                        <div className="relative w-full h-[350px]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center"
                            onError={(e) =>
                              (e.currentTarget.src =
                                'https://placehold.co/300x300')
                            }
                          />
                          <p className="absolute bottom-0 left-0 bg-white/80 px-2 py-1 text-xs md:text-base font-bold">
                            {formatCurrency(product.price)}
                          </p>
                          <div className="absolute inset-0 bg-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <button
                              className="bg-[#5AA1E3] text-white px-4 py-1 text-xs md:text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                              onClick={() =>
                                navigate(`/productDetail/${product.id}`)
                              }
                            >
                              View Detail
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
                    )}
                  </SwiperSlide>
                ))}
          </Swiper>

          <div className="text-center mt-8">
            <button className="w-full md:w-auto bg-[#5AA1E3] text-white px-8 md:px-16 py-2">
              <Link to="/products">SEE MORE PRODUCTS</Link>{' '}
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
