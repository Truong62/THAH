import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const CardProduct = ({link, nameProduct, description, price, brand, nameTag = []}) => {
    return (
        <Link to={`/campaign/${link}`}>
            <div className="bg-white rounded-lg p-3 border-gray-200 border transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
                <img src='https://bizweb.dktcdn.net/thumb/1024x1024/100/413/335/products/duyetfashion-wmns-nike-air-jordan-1-retro-high-og-silver-toe-cd0461-001-duyet-fashion-51.jpg?v=1627397656580' alt="Campaign" className="w-full rounded-t-lg h-auto object-cover"
                     style={{aspectRatio: '1 / 1'}}/>
                <span className=" font-semibold text-gray-500 mt-2">{brand}</span>
                <h4 className="text-xl font-bold mb-2">{nameProduct}</h4>
                <div className="flex items-center gap-1.25 text-sm">
                    {nameTag.map((item, index) => (
                        <p key={index}
                           className=" px-1 rounded-xl bg-blue-200 mr-2  text-[#303030]">
                            {item}
                        </p>
                    ))}
                </div>
                <p className='mt-2'>{description}</p>
                <div className="grid justify-end mt-3">
                    <p className='text-red-500 text-xl font-bold'>{price}</p>
                </div>
            </div>
        </Link>
    );
};

export default CardProduct;