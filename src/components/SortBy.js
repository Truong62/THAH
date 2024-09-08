import React, { useState } from 'react';

const SortBy = () => {
    const [sortOption, setSortOption] = useState('popularity');

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <div className="flex items-center mb-4">
            <span className="mr-2">Sort by</span>
            <select
                value={sortOption}
                onChange={handleSortChange}
                className="p-2"
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