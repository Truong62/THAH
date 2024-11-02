import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ArrowIcon from './SvgIcon/ArrowIcon';

/**
 *
 * @param onCategoryChange
 * @param selectedCategory
 * @returns {Element}
 * @constructor
 */
const Sidebar = ({ onCategoryChange, selectedCategory }) => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [openBrands, setOpenBrands] = useState(true);
  const [openPrice, setOpenPrice] = useState(true);
  const [openSize, setOpenSize] = useState(true);

  const toggleCategory = useCallback(() => {
    setIsCategoryOpen((prevState) => !prevState);
  }, []);

  const toggleBrands = useCallback(() => {
    setOpenBrands((prevState) => !prevState);
  }, []);

  const togglePrice = useCallback(() => {
    setOpenPrice((prevState) => !prevState);
  }, []);

  const toggleSize = useCallback(() => {
    setOpenSize((prevState) => !prevState);
  }, []);

  return (
    <div className="p-4 bg-white border border-gray-300 rounded-lg">
      <div className="mb-4">
        {/* Category */}
        <button
          className="w-full flex justify-between items-center py-2 px-4 rounded-lg md:hidden"
          onClick={toggleCategory}
        >
          <span className="text-xl font-bold">Category</span>
          <ArrowIcon isOpen={isCategoryOpen} />
        </button>
        <div className={`mt-2 ${isCategoryOpen ? 'block' : 'hidden'} md:block`}>
          <div className="w-full flex justify-between items-center py-2 px-4 rounded-lg md:block ">
            <span className="text-xl font-bold">Category</span>
          </div>
          <button
            className="w-full flex justify-between items-center py-2 px-4"
            onClick={toggleBrands}
          >
            <span>Brands</span>
            <ArrowIcon isOpen={openBrands} />
          </button>
          {openBrands && (
            <form className="px-4 mt-2">
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="brand"
                  className="mr-2"
                  onChange={() => onCategoryChange('brand:Brand 1')}
                  checked={selectedCategory.brand === 'Brand 1'}
                />
                <label htmlFor="brand1">Brand 1</label>
                <span className="ml-auto">(10)</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="brand"
                  className="mr-2"
                  onChange={() => onCategoryChange('brand:Brand 2')}
                  checked={selectedCategory.brand === 'Brand 2'}
                />
                <label htmlFor="brand2">Brand 2</label>
                <span className="ml-auto">(15)</span>
              </div>
            </form>
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
                  type="radio"
                  name="price"
                  className="mr-2"
                  onChange={() => onCategoryChange('price:Under $50')}
                  checked={selectedCategory.price === 'Under $50'}
                />
                <label htmlFor="price1">Under $50</label>
                <span className="ml-auto">(20)</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="price"
                  className="mr-2"
                  onChange={() => onCategoryChange('price:$50 to $100')}
                  checked={selectedCategory.price === '$50 to $100'}
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
                  type="radio"
                  name="size"
                  className="mr-2"
                  onChange={() => onCategoryChange('size:Small')}
                  checked={selectedCategory.size === 'Small'}
                />
                <label htmlFor="size1">Small</label>
                <span className="ml-auto">(25)</span>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="size"
                  className="mr-2"
                  onChange={() => onCategoryChange('size:Medium')}
                  checked={selectedCategory.size === 'Medium'}
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

Sidebar.propTypes = {
  onCategoryChange: PropTypes.func.isRequired,
  selectedCategory: PropTypes.shape({
    brand: PropTypes.string,
    price: PropTypes.string,
    size: PropTypes.string,
  }).isRequired,
};
