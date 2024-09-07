import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    { src: 'https://img.freepik.com/premium-psd/sport-sneakers-shoes-sale-social-media-instagram-post-facebook-web-banner-template_70055-1342.jpg', link: '#', brand: 'Brand A' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLHbND_C1HFcbNWa71Wh31LD7464feciCJw&s', link: '#', brand: 'Nike' },
    { src: 'https://img.freepik.com/premium-psd/banner-sport-shoes-sale-social-media-post-facebook-web-banner-template_70055-854.jpg', link: '#', brand: 'Adidas' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
      <div className="relative w-full max-w-full h-[500px] overflow-hidden rounded-lg shadow-lg group">
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
