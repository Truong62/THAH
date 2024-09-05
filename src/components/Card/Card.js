
import React from 'react';
import { Link } from 'react-router-dom';

const CardProduct = ({ link, nameProduct, description, price, brand, nametag }) => {

    return (
        <>
            <Link to={`/campaign/${link}`}
                className="bg-white rounded-lg p-4 shadow-md transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
                <img src='../../images/wallpaperflare.com_wallpaper.jpg' alt="Campaign"
                    className="w-full h-auto max-h-52 rounded-lg object-cover" />
                <div className="flex flex-col gap-2.5 mt-2.5 flex-grow">
                    <h4 className="text-2xl font-bold ">{nameProduct}</h4>
                    <p>{description}</p>
                </div>
                <div className="flex flex-col gap-1.25 text-sm ">
                    <span className='text-red-500 text-xl font-bold'>{price}</span>
                </div>
                <div className="flex flex-col gap-1.25 text-sm">
                    <span className="text-lg font-semibold text-gray-500">{brand}</span>
                </div>
                <div className="flex flex-col gap-1.25 text-sm">
                    <span className="text-lg font-semibold text-gray-500">{nametag}</span>
                </div>
            </Link>
        </>
    );
};

export default CardProduct;