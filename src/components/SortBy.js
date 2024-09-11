import React from 'react';

const SortBy = ({sortOption, setSortOption}) => {

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
                <option value="popularity">Popularity</option>
                <option value="priceLowToHigh">Price: Low to High</option>
                <option value="priceHighToLow">Price: High to Low</option>
                <option value="newest">Newest</option>
            </select>
        </div>
    );
};

export default SortBy;