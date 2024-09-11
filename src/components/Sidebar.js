import React, { useCallback, useMemo, useState } from 'react';

const Sidebar = ({ onCategoryChange, selectedCategory }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [openBrands, setOpenBrands] = useState(false);
    const [openPrice, setOpenPrice] = useState(false);
    const [openSize, setOpenSize] = useState(false);

    const toggleCategory = useCallback(() => {
        setIsCategoryOpen(prevState => !prevState);
    }, []);

    const toggleBrands = useCallback(() => {
        setOpenBrands(prevState => !prevState);
    }, []);

    const togglePrice = useCallback(() => {
        setOpenPrice(prevState => !prevState);
    }, []);

    const toggleSize = useCallback(() => {
        setOpenSize(prevState => !prevState);
    }, []);

    const ArrowIcon = useMemo(() => ({ isOpen }) => (
        <svg
            className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-90' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
        </svg>
    ), []);

    return (
        <div className="p-4 bg-white border border-gray-300 rounded-lg">
            <div className="mb-4">
                {/* Category */}
                <button
                    className="w-full flex justify-between items-center py-2 px-4 rounded-lg md:hidden"
                    onClick={toggleCategory}
                >
                    <span className='text-xl font-bold'>Category</span>
                    <ArrowIcon isOpen={isCategoryOpen} />
                </button>
                <div className={`mt-2 ${isCategoryOpen ? 'block' : 'hidden'} md:block`}>
                    <div className="w-full flex justify-between items-center py-2 px-4 rounded-lg md:block hidden">
                        <span className='text-xl font-bold'>Category</span>
                    </div>
                    {/* Brands */}
                    <button
                        className="w-full flex justify-between items-center py-2 px-4"
                        onClick={toggleBrands}
                    >
                        <span>Brands</span>
                        <ArrowIcon isOpen={openBrands} />
                    </button>
                    {openBrands && (
                        <div className="px-4 mt-2">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="brand1"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('Brand 1')}
                                    checked={selectedCategory.includes('Brand 1')}
                                />
                                <label htmlFor="brand1">Brand 1</label>
                                <span className="ml-auto">(10)</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="brand2"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('Brand 2')}
                                    checked={selectedCategory.includes('Brand 2')}
                                />
                                <label htmlFor="brand2">Brand 2</label>
                                <span className="ml-auto">(15)</span>
                            </div>
                        </div>
                    )}
                    <hr className="my-2" />

                    {/* Price */}
                    <button
                        className="w-full flex justify-between items-center py-2 px-4"
                        onClick={togglePrice}
                    >
                        <span>Price</span>
                        <ArrowIcon isOpen={openPrice} />
                    </button>
                    {openPrice && (
                        <div className="px-4 mt-2">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="price1"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('Under $50')}
                                    checked={selectedCategory.includes('Under $50')}
                                />
                                <label htmlFor="price1">Under $50</label>
                                <span className="ml-auto">(20)</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="price2"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('$50 to $100')}
                                    checked={selectedCategory.includes('$50 to $100')}
                                />
                                <label htmlFor="price2">$50 to $100</label>
                                <span className="ml-auto">(30)</span>
                            </div>
                        </div>
                    )}
                    <hr className="my-2" />

                    {/* Size */}
                    <button
                        className="w-full flex justify-between items-center py-2 px-4"
                        onClick={toggleSize}
                    >
                        <span>Size</span>
                        <ArrowIcon isOpen={openSize} />
                    </button>
                    {openSize && (
                        <div className="px-4 mt-2">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="size1"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('Small')}
                                    checked={selectedCategory.includes('Small')}
                                />
                                <label htmlFor="size1">Small</label>
                                <span className="ml-auto">(25)</span>
                            </div>
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    id="size2"
                                    className="mr-2"
                                    onChange={() => onCategoryChange('Medium')}
                                    checked={selectedCategory.includes('Medium')}
                                />
                                <label htmlFor="size2">Medium</label>
                                <span className="ml-auto">(35)</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default React.memo(Sidebar);