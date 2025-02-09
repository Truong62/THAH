import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './style.css';
const brands = [
  {
    name: 'Adidas',
    image:
      'https://th.bing.com/th/id/OIP.jda-jGq1luFgO1x1v1Y4bAHaFC?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Converse',
    image: 'https://www.pngmart.com/files/22/Converse-Logo-PNG-Clipart.png',
  },
  {
    name: 'Nike',
    image:
      'https://logos-world.net/wp-content/uploads/2020/04/Nike-Logo-1978-present.jpg',
  },
  {
    name: 'Vans',
    image:
      'https://www.creativosonline.org/wp-content/uploads/2022/02/Logo-VANS.png',
  },
  {
    name: 'New Balance',
    image:
      'https://th.bing.com/th/id/R.2854eddd63b5883724a0929ac04a0a3f?rik=yh2eJPdS4a9RHQ&pid=ImgRaw&r=0',
  },
  {
    name: 'Balenciaga',
    image:
      'https://th.bing.com/th/id/OIP.lmZBJBM8QlUAvmO0lMUbBwHaHa?rs=1&pid=ImgDetMain',
  },
  {
    name: 'Reebok',
    image:
      'https://logos-download.com/wp-content/uploads/2016/02/Reebok_Logo_2014.png',
  },
  {
    name: 'Bitis',
    image:
      'https://www.mmaglobal.com/files/styles/member_logo_large/public/logos/untitled_7.png?itok=_uoKrGvy',
  },
  {
    name: 'Jordan',
    image:
      'https://logos-download.com/wp-content/uploads/2016/04/Jordan_logo_logotype.png',
  },
  {
    name: 'Puma',
    image:
      'https://i.pinimg.com/originals/87/34/07/87340705b51a12d6bbdd99f0d6c4a910.png',
  },
];

const Brands = () => {
  return (
    <div className="p-5">
      <div className="hidden md:grid grid-cols-5 gap-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex justify-center items-center h-24  rounded-md"
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 2,
            fill: 'row',
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center h-24 rounded-md">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
