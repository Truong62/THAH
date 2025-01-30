import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
// import useFetchApi from '../../hooks/useFetchApi';
import { Navigation, Autoplay } from 'swiper/modules';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { truncateDescription } from '../../utils/truncateDescription';
import products from '../../data.json';
import { formatCurrency } from '../../utils/formatCurrency';
const FashionBanner = () => {
  // const { data: products, error } = useFetchApi(
  //   'http://localhost:5000/api/product',
  //   {
  //     limit: 10,
  //     order: 'desc',
  //   }
  // );

  const navigate = useNavigate();

  // if (error) {
  //   return (
  //     <div className="text-center text-red-500">Error: {error.message}</div>
  //   );
  // }

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
          425: { slidesPerView: 1 },
          683: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
                className="cursor-pointer bg-white shadow-md w-80 h-auto relative flex flex-col justify-between overflow-hidden border rounded-lg p-4"
              >
                <div className="absolute top-2 right-2">
                  <button
                    className="bg-white  text-black px-4 py-2 rounded hover:bg-white shadow-md"
                    // onClick={() => handleAddToCart(product)}
                  >
                    <AddShoppingCartIcon />
                  </button>{' '}
                </div>
                <img
                  src={product.variants[0].images[0]}
                  alt={product.productName}
                  className="w-full h-48 object-cover object-center mb-4"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {product.productName}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2">
                    {truncateDescription(product.productDescription, 40)}
                  </p>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      {product.isSale && (
                        <span className="text-red-500 line-through mr-2">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-lg font-bold text-gray-800">
                        {formatCurrency(product.variants[0].price)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.category}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span className="text-sm text-gray-600 ml-2">(20)</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default FashionBanner;
