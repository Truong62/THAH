import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
  const images = [
    { src: 'https://vn-live-01.slatic.net/p/d82bec8c54c404d9e1afc6c6f369cd51.jpg', link: '#' },
    { src: 'https://drake.vn/image/catalog/H%C3%ACnh%20content/hinh-anh-giay-vans/hinh-anh-giay-vans-9.jpg', link: '#' },
    { src: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lqpwlqnb93qv55', link: '#' },
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
    <div style={styles.container}>
      <div style={styles.slider}>
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex}`}
          style={styles.image}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    padding: '0 20px',
  },
  slider: {
    width: '80%',
    maxWidth: '600px',
    height: '300px',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.5s ease-in-out',
  },
};

export default ImageSlider;
