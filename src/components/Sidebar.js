import React, { useState } from 'react';

const Sidebar = () => {
    const [openCategory, setOpenCategory] = useState(false);
    const [openBrands, setOpenBrands] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openSize, setOpenSize] = useState(false);

    const toggleCategory = () => {
        setOpenCategory(!openCategory);
    };

    const toggleBrands = () => {
        setOpenBrands(!openBrands);
    };

    const togglePrice = () => {
        setOpenPrice(!openPrice);
    };

    const toggleSize = () => {
        setOpenSize(!openSize);
    };

    const ArrowIcon = ({ isOpen }) => (
        <svg
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
    );

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <div className="mb-4">
                {/* Category */}
                <button
                    className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                    onClick={toggleCategory}
                >
                    <span>Category</span>
                    <ArrowIcon isOpen={openCategory} />
                </button>
                {openCategory && (
                    <div className="mt-2">
                        {/* Brands */}
                        <button
                            className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                            onClick={toggleBrands}
                        >
                            <span>Brands</span>
                            <ArrowIcon isOpen={openBrands} />
                        </button>
                        {openBrands && (
                            <div className="ml-4 mt-2">
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="brand1" className="mr-2" />
                                    <label htmlFor="brand1">Brand 1</label>
                                    <span className="ml-auto">(10)</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="brand2" className="mr-2" />
                                    <label htmlFor="brand2">Brand 2</label>
                                    <span className="ml-auto">(15)</span>
                                </div>
                            </div>
                        )}

                        {/* Price */}
                        <button
                            className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                            onClick={togglePrice}
                        >
                            <span>Price</span>
                            <ArrowIcon isOpen={openPrice} />
                        </button>
                        {openPrice && (
                            <div className="ml-4 mt-2">
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="price1" className="mr-2" />
                                    <label htmlFor="price1">Under $50</label>
                                    <span className="ml-auto">(20)</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="price2" className="mr-2" />
                                    <label htmlFor="price2">$50 to $100</label>
                                    <span className="ml-auto">(30)</span>
                                </div>
                            </div>
                        )}

                        {/* Size */}
                        <button
                            className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-lg"
                            onClick={toggleSize}
                        >
                            <span>Size</span>
                            <ArrowIcon isOpen={openSize} />
                        </button>
                        {openSize && (
                            <div className="ml-4 mt-2">
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="size1" className="mr-2" />
                                    <label htmlFor="size1">Small</label>
                                    <span className="ml-auto">(25)</span>
                                </div>
                                <div className="flex items-center mb-2">
                                    <input type="checkbox" id="size2" className="mr-2" />
                                    <label htmlFor="size2">Medium</label>
                                    <span className="ml-auto">(35)</span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sidebar;