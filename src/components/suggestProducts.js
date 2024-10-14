import React from 'react';
import CardProduct from '../components/Card/Card';
import { formatCurrency } from '../utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';
import { truncateDescription } from '../utils/truncateDescription';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const SuggestProducts = ({ products }) => {
  return (
    <div className="my-8">
      <Swiper
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full"
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
              description={truncateDescription(item.description, 60)}
              price={formatCurrency(item.price)}
              brand={item.brand}
              nameTag={item.nameTag}
              mainImage={item.mainImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestProducts;
