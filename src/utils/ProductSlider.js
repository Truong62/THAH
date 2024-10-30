const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Hiển thị 1 sản phẩm trên màn hình
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768, // Khi màn hình nhỏ hơn 768px
      settings: {
        slidesToShow: 2, // Hiển thị 2 sản phẩm
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480, // Khi màn hình nhỏ hơn 480px
      settings: {
        slidesToShow: 1, // Hiển thị 1 sản phẩm
        slidesToScroll: 1,
      },
    },
  ],
};
export default settings;
