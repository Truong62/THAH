import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param selectedCategory
 * @param onRemoveCategory
 * @returns {Element}
 * @constructor
 */
const FilterSummary = ({ selectedCategory, onRemoveCategory }) => {
  return (
    <div
      className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4"
      style={{ minHeight: '50px' }}
    >
      <div className="flex items-center">
        <span className="mr-2">Filters by: </span>
        {Object.entries(selectedCategory).map(
          ([key, value]) =>
            key !== 'sortOption' &&
            value && (
              <div
                key={key}
                className="flex items-center px-2 rounded-xl bg-blue-200 mr-2 text-[#303030]"
              >
                <span>{`${value}`}</span>
                <button
                  className="ml-2 text-red-500 font-bold"
                  onClick={() => onRemoveCategory(key)}
                >
                  X
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

FilterSummary.propTypes = {
  selectedCategory: PropTypes.object.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
};

export default FilterSummary;
