import React from 'react';

const CardProduct = ({ nameProduct, description, price, brand, nametag }) => {
    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
            <img
                className="w-[410px] h-[350px] object-cover"
                src="../images/product/AIR+ZOOM+PEGASUS+41+PQ.png"
                alt={nameProduct}
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-bold mb-2">{nameProduct}</h3>
                    <p className="text-gray-600 mb-2">{brand}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {nametag.map((tag, index) => (
                            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-700 mb-2">{description}</p>
                </div>
                <p className="text-red-500 font-bold">{price}</p>
            </div>
        </div>
    );
};

export default CardProduct;