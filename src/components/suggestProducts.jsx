import { useNavigate } from 'react-router-dom';
import CardProduct from './Card/Card.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { truncateDescription } from '../utils/truncateDescription';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import PropTypes from 'prop-types';
import React from 'react';

const SuggestProducts = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    navigate(`/products/${productName}`);
    window.scrollTo(0, 0);
    window.location.href = `/product/${productName}`;
    window.location.reload();
  };

  return (
    <div className="my-8 overflow-visible">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          425: { slidesPerView: 1, spaceBetween: 15 },
          683: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex items-stretch justify-center pb-4"
          >
            <div className="w-full h-auto flex flex-col justify-between">
              <CardProduct
                nameProduct={item.nameProduct}
                description={truncateDescription(item.productDescription, 30)}
                price={formatCurrency(item.variants[0].price)}
                brand={item.brandName}
                nameTag={item.nameTag}
                imageUrl={item.variants[0].images[0]}
                onClick={() => handleProductClick(item.productName)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestProducts;

SuggestProducts.propTypes = {
  products: PropTypes.array.isRequired,
};
