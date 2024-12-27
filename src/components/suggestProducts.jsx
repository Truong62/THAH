import { useNavigate } from 'react-router-dom';
import CardProduct from './Card/Card.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { truncateDescription } from '../utils/truncateDescription';
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
    <div className="my-8">
      <Swiper
        spaceBetween={20}
        className="w-full pb-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <CardProduct
              nameProduct={item.nameProduct}
              description={truncateDescription(item.productDescription, 60)}
              price={formatCurrency(item.variants[0].price)}
              brand={item.brandName}
              nameTag={item.nameTag}
              imageUrl={item.variants[0].images[0]}
              onClick={() => handleProductClick(item.productName)}
            />
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
