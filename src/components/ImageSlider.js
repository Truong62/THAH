import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    { src: 'https://vn-live-01.slatic.net/p/d82bec8c54c404d9e1afc6c6f369cd51.jpg', link: '#', brand: 'Brand A' },
    { src: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-9.jpg', link: '#', brand: 'Brand B' },
    { src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqpwlqnb93qv55', link: '#', brand: 'Brand C' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleClick = () => {
    const link = images[currentIndex].link;
    if (link && link !== '#') {
      window.location.href = link;
    }
  };

  return (
    <div className="flex justify-center items-center h-[50vh] px-5">
      <div className="relative w-full max-w-full h-[300px] overflow-hidden rounded-lg shadow-lg group">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          onClick={handleClick}
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <h2 className="text-black text-3xl font-bold bg-opacity-50 p-2 rounded">
            {images[currentIndex].brand}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
