import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './Card.css'; // Import the CSS file for custom styles

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280, // Devices with width less than 1280px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ],
    appendDots: dots => (
      <div className="flex justify-center mt-4">
        <ul className="flex space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
    )
  };

  const formatCurrency = (amount) => {
    return `${amount.toLocaleString('vi-VN').replace(/,/g, '')} VND`;
  };

  const renderCampaigns = () => (
    [...Array(4)].map((_, index) => (
      <Link to={`/campaign/${index}`} key={index} className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
        <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" loading="lazy" />
        <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
          <span className="font-bold text-gray-700">Category</span>
          <h4 className="text-lg font-semibold">Campaign Title</h4>
          <p className="line-clamp-2">Campaign description goes here. This is a longer description to demonstrate the line clamping effect. It should be truncated after two lines.</p>
        </div>
        <div className="flex flex-col gap-1.25 text-sm text-gray-500">
          <span className='text-red-300'>{formatCurrency(1000000)}</span>
          <span>Z backers</span>
          <span>by Author</span>
        </div>
      </Link>
    ))
  );

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Popular Campaign</h2>
      <div className="hidden xl:block">
        <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderCampaigns()}
        </div>
      </div>
      <div className="block xl:hidden">
        <Slider {...settings}>
          {renderCampaigns()}
        </Slider>
      </div>
      <br></br>
      <h2 className="text-2xl font-bold mb-5">Recent Campaign</h2>
      <div className="hidden xl:block">
        <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {renderCampaigns()}
        </div>
      </div>
      <div className="block xl:hidden">
        <Slider {...settings}>
          {renderCampaigns()}
        </Slider>
      </div>
    </div>
  );
};

export default Card;
