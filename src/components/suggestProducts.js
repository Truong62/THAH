import React from 'react';
import Slider from 'react-slick';
import CardProduct from '../components/Card/Card';

const SuggestProducts = ({ products }) => {
  const formatCurrency = (price) => 
    new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  
  const truncateDescription = (text, maxLength) => 
    text.length > maxLength ? text.substring(0, maxLength) + '...' : text;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className='flex items-center mt-3'>
        <img className='w-[40px] mr-2' src='../../images/shoe.gif' alt='' />
        <p className="text-2xl font-bold">You may also like</p>
        <img className='w-[40px] ml-2 transform scale-x-[-1]' src='../../images/shoe.gif' alt='' />
      </div>

      <Slider {...settings}>
        {products && products.length > 0 ? (
          products.map((item, index) => (
            <div key={index} className="p-2">
              <CardProduct
                link={item.link}
                nameProduct={truncateDescription(item.name, 20)}
                description={truncateDescription(item.description, 70)}
                price={formatCurrency(item.price)}
                brand={item.brand}
                nameTag={item.tag}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[200px] mx-auto"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500">Không có sản phẩm nào để gợi ý.</p>
        )}
      </Slider>
    </div>
  );
};

export default SuggestProducts;
