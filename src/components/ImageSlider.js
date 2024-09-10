import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    { src: 'https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1342.jpg', link: '#', brand: 'Brand A' },
    { src: 'https://vsneakershop.weebly.com/uploads/6/3/3/8/63388329/vsneaker-banner-gi-y_orig.png', link: '#', brand: 'Nike' },
    { src: 'https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg', link: '#', brand: 'Adidas' },
  ];

  // Nhân bản ảnh để tạo hiệu ứng trượt liên tục
  const extendedImages = [...images, images[0]]; // Thêm ảnh đầu tiên vào cuối
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === extendedImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [extendedImages.length]);

  const handleClick = () => {
    const link = extendedImages[currentIndex].link;
    if (link && link !== '#') {
      window.location.href = link;
    }
  };

  return (
    <div className="relative w-full max-w-full overflow-hidden rounded-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center"
          >
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="w-auto h-full max-w-full object-contain cursor-pointer"
              onClick={handleClick}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <h2 className="text-white text-xl md:text-3xl font-bold bg-black bg-opacity-50 p-2 rounded">
          {extendedImages[currentIndex].brand}
        </h2>
      </div>
    </div>
  );
};

export default ImageSlider;
