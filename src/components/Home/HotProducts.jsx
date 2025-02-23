import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import { Navigation, Autoplay } from 'swiper/modules';
import CardProduct from '../Card/Card';
import products from '../../data.json';
import { truncateDescription } from '../../utils/truncateDescription';
import { formatCurrency } from '../../utils/formatCurrency';

const HotProduct = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white">
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
        {products.map((product, index) => {
          const handleProductClick = () => {
            navigate(`/products/${product.productName}`);
          };

          return (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center p-4"
            >
              <div className="w-[22rem] h-auto">
                <CardProduct
                  nameProduct={product.productName}
                  description={truncateDescription(
                    product.productDescription,
                    40
                  )}
                  price={formatCurrency(product.variants[0].price)}
                  brand={product.brand}
                  nameTag={product.tags || []}
                  imageUrl={product.variants[0].images[0]}
                  onClick={handleProductClick}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HotProduct;
