import React from 'react';

const CampaignGrid = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-5">Popular Campaign</h2>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Education</span>
            <h4 className="text-lg font-semibold">Powered Kits Learning Boxes</h4>
            <p>Fun, durable and reusable boxes with eco-friendly options.</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$2,000 raised of $2,500</span>
            <span>173 backers</span>
            <span>by Mahfuzul Nabil</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Real Estate</span>
            <h4 className="text-lg font-semibold">Building Hope Village</h4>
            <p>Together we can create access for everyone.</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$250 raised of $1,000</span>
            <span>50 backers</span>
            <span>by Adom Shafi</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Real Estate</span>
            <h4 className="text-lg font-semibold">New iMac For My Business!</h4>
            <p>My computer decided to die. As a result, my small business.</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$1,200 raised of $1,500</span>
            <span>12 backers</span>
            <span>by Sami Ahmed</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Home</span>
            <h4 className="text-lg font-semibold">The Watchman's Chairs</h4>
            <p>Your home for indie and classic cinema has just been handed...</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$5,000 raised of $6,000</span>
            <span>100 backers</span>
            <span>by Nill</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-5">Recent Campaign</h2>
      <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Camera Gear</span>
            <h4 className="text-lg font-semibold">Advanced 4K Action Camera</h4>
            <p>The 4K Vlog - Start Creating Now Without Limitation.</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$1,500 raised of $2,000</span>
            <span>173 backers</span>
            <span>by Cham</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Food</span>
            <h4 className="text-lg font-semibold">Restaurants Open Business</h4>
            <p>A unique restaurant, beer bar garden, and lighting location.</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$950 raised of $1,200</span>
            <span>150 backers</span>
            <span>by Mahbubul Alom</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Comics</span>
            <h4 className="text-lg font-semibold">"Lost Soul" graphic novel</h4>
            <p>A team of re-searchers set out to find the meaning of...</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$1,800 raised of $2,500</span>
            <span>65 backers</span>
            <span>by Sajib Rahman</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
          <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign" className="w-full h-auto max-h-52 rounded-lg object-cover" />
          <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
            <span className="font-bold text-gray-700">Clothes & Wearables</span>
            <h4 className="text-lg font-semibold">Cool Comfy Shoes easy on You</h4>
            <p>Introducing a new range of super comfortable shoes...</p>
          </div>
          <div className="flex flex-col gap-1.25 text-sm text-gray-500">
            <span>$4,000 raised of $5,000</span>
            <span>100 backers</span>
            <span>by Saleh Ahmed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignGrid;