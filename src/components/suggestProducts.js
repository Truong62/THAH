import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import CardProduct from '../components/Card/Card.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { truncateDescription } from '../utils/truncateDescription';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import PropTypes from 'prop-types';

const SuggestProducts = ({ products }) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate để điều hướng

  const handleProductClick = (productName) => {
    navigate(`/products/${productName}`); // Điều hướng đến trang chi tiết sản phẩm
  };

  return (
    <div className="my-8">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
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
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <CardProduct
              key={index}
              nameProduct={product.productName}
              description={truncateDescription(product.productDescription, 14)}
              price={formatCurrency(product.variants[0].price)}
              brand={product.brandName}
              imageUrl={product.variants[0].images[0]}
              onClick={() => handleProductClick(product.productName)}
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
