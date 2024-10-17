import React from 'react';
import { truncateDescription } from '../../utils/truncateDescription.js';
import { formatCurrency } from '../../utils/formatCurrency';

const CardProduct = ({
  id,
  link,
  nameProduct,
  description,
  price,
  brand,
  nameTag = [], // Mặc định là mảng rỗng
  mainImage,
  onClick,
}) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="bg-white rounded-lg p-3 border-gray-200 border transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]">
        <img
          src={mainImage}
          alt={nameProduct}
          className="w-full rounded-t-lg h-auto object-cover"
          style={{ aspectRatio: '1 / 1' }}
        />
        <span className="font-semibold text-gray-500 mt-2">{brand}</span>
        <h4 className="text-xl font-bold mb-2">{nameProduct}</h4>
        <div className="flex items-center gap-1.25 text-sm">
          {Array.isArray(nameTag) ? (
            nameTag.map((item, index) => (
              <p
                key={index}
                className="px-2 rounded-xl bg-blue-200 mr-2 text-[#303030]"
              >
                {item}
              </p>
            ))
          ) : (
            <p className="px-2 rounded-xl bg-blue-200 mr-2 text-[#303030]">
              {nameTag}
            </p>
          )}
        </div>
        <p className="mt-2">{description}</p>
        <div className="grid justify-end mt-3">
          <p className="text-red-500 text-xl font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
