import { useState } from "react";
import { useSwipeable } from "react-swipeable";

const useImageSwiper = (images) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return {
    currentIndex,
    setCurrentIndex,
    handlePrevImage,
    handleNextImage,
    swipeHandlers,
  };
};

export default useImageSwiper;
