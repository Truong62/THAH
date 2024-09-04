import React from 'react';
import { Link } from 'react-router-dom';

const CampaignGrid = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Popular Campaign</h2>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <Link to={`/campaign/${index}`} key={index} className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
            <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
            <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
              <span className="font-bold text-gray-700">Category</span>
              <h4 className="text-lg font-semibold">Campaign Title</h4>
              <p>Campaign description goes here.</p>
            </div>
            <div className="flex flex-col gap-1.25 text-sm text-gray-500">
              <span>$X raised of $Y</span>
              <span>Z backers</span>
              <span>by Author</span>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-5">Recent Campaign</h2>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[...Array(4)].map((_, index) => (
          <Link to={`/campaign/${index}`} key={index} className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
            <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
            <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
              <span className="font-bold text-gray-700">Category</span>
              <h4 className="text-lg font-semibold">Campaign Title</h4>
              <p>Campaign description goes here.</p>
            </div>
            <div className="flex flex-col gap-1.25 text-sm text-gray-500">
              <span>$X raised of $Y</span>
              <span>Z backers</span>
              <span>by Author</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CampaignGrid;