import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';

const features = [
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_1__1_.png',
    title: 'Miễn phí vận chuyển',
    description: 'Với đơn hàng đầu tiên',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_2__1_.png',
    title: 'Ưu đãi hấp dẫn',
    description: 'Nhiều khuyến mãi',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_3__1_.png',
    title: '100% chính hãng',
    description: 'Bảo đảm chất lượng',
  },
  {
    icon: 'https://file.hstatic.net/1000366086/file/policies_icon_4__1_.png',
    title: 'Hotline: 0971443180',
    description: 'Gọi ngay để mua hàng nhanh hơn',
  },
];

const FeatureList = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={false}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },
          425: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
      >
        {features.map((feature, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex items-center space-x-9 p-4 bg-white">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 h-10"
              />
              <div className="text-center">
                <div className="font-semibold whitespace-nowrap">
                  {feature.title}
                </div>
                <div className="text-gray-500 text-sm">
                  {feature.description}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureList;
