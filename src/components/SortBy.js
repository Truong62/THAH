import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param sortOption
 * @param setSortOption
 * @returns {Element}
 * @constructor
 */
const SortBy = ({ sortOption, setSortOption }) => {
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="relative mb-4 flex items-center space-x-2">
      <span className="hidden md:inline">Sort by</span>
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="p-2 border rounded"
      >
        <option value="Popularity">Popularity</option>
        <option value="Price Low to High">Price: Low to High</option>
        <option value="Price High to Low">Price: High to Low</option>
        <option value="Newest">Newest</option>
      </select>
    </div>
  );
};

export default SortBy;

SortBy.propTypes = {
  sortOption: PropTypes.object.isRequired,
  setSortOption: PropTypes.func.isRequired,
};
