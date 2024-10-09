import React from 'react';
import CardProduct from '../components/Card/Card';
import { formatCurrency } from '../utils/formatCurrency';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const SuggestProducts = ({ products }) => {
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="my-4">
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="w-full h-[300px]"
      >
        {products.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center bg-white text-center">
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
    </div>
  );
};

export default SuggestProducts;
