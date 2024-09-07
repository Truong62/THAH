import React from 'react';
import {Link} from 'react-router-dom';

const CardProduct = ({link, nameProduct, description, price, brand, nametag = []}) => {
    return (
        <Link to={`/campaign/${link}`}>
            <div
                className="bg-white rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
                <img src='../../images/AIR+ZOOM+PEGASUS+41+PQ.png' alt="Campaign" className="w-full h-auto object-cover"
                     style={{aspectRatio: '1 / 1'}}/>
                <span className=" font-semibold text-gray-500 mt-2">{brand}</span>
                <h4 className="text-xl font-bold mb-2">{nameProduct}</h4>
                <div className="flex items-center gap-1.25 text-sm">
                    {nametag.map((item, index) => (
                        <p key={index}
                           className="text-lg px-1 rounded-xl bg-blue-200 mr-2 font-semibold text-[#303030]">
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