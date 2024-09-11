import React, { useState } from 'react';
import FilterIconSvg from "../svg/FilterIconSVG";

const SortBy = () => {
    const [sortOption, setSortOption] = useState('popularity');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="relative mb-4 flex items-center space-x-2">
            <span className="hidden md:inline">Sort by</span>
            <FilterIconSvg />
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