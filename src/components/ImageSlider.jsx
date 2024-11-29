import { useEffect } from 'react';
import ReactPlayer from 'react-player';
import Video from '../assets/intro.mp4';
import { motion } from 'framer-motion';
import React from 'react';

const ImageSlider = () => {
  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    console.log(isIOS);

    if (isIOS) {
      const videoElements = document.querySelectorAll('video');
      videoElements.forEach((video) => {
        video.controls = false;
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0 }}
    >
      <div className="rounded-3xl relative">
        <ReactPlayer
          width="200"
          height="100"
          style={{ borderRadius: '20px' }}
          url={Video}
          playing
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-3xl"></div>
        <p className="text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-semibold text-white">
          Welcome to our sports shoe store – where we bring you stylish and
          high-quality sneakers to make every step stand out!
        </p>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
