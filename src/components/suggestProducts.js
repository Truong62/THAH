import React from 'react';
import CardProduct from '../components/Card/Card';
import { formatCurrency } from '../utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

const SuggestProducts = ({ products }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index}>
            <CardProduct
              nameProduct={item.name}
              description={truncateDescription(item.description, 14)}
              price={formatCurrency(item.price)}
              brand={item.brand || "Brand"}
              nametag={["#tag1", "#tag2", "#tag3"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SuggestProducts;
