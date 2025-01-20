import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import useFetchApi from '../../hooks/useFetchApi';

const FashionBanner = () => {
  const { data: products, error } = useFetchApi(
    'http://localhost:5000/api/product',
    {
      limit: 10,
      order: 'desc',
    }
  );

  const navigate = useNavigate();

  if (error) {
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );
  }

  return (
    <div className="bg-white">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        breakpoints={{
          425: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              className="cursor-pointer bg-white shadow-md w-80 h-80 relative flex flex-col justify-between overflow-hidden border-b"
            >
              {product.isNew && (
                <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-sm font-semibold">
                  New
                </div>
              )}
              {product.isSale && (
                <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 text-sm font-semibold rounded">
                  Sale
                </div>
              )}
              <img
                src={product.imagePath}
                alt={product.name}
                className="w-full h-48 object-cover object-center"
              />
              <div className="p-4 flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.productName}
                </h2>
                <p className="text-sm text-gray-500 mb-2">
                  {product.productDescription}
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    {product.isSale && (
                      <span className="text-red-500 line-through mr-2">
                        ${product.originalPrice}
                      </span>
                    )}
                    <span className="text-lg font-bold text-gray-800">
                      ${product.price}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.category}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FashionBanner;
