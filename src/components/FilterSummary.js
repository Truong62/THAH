import React from 'react';

const FilterSummary = ({ totalResults, filteredResults, selectedCategory, onRemoveCategory }) => {
    return (
        <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4" style={{ minHeight: '50px' }}>
            <div className="hidden md:block">
                {selectedCategory.length > 0 && (
                    <span>
                        Showing {filteredResults} results from total {totalResults} for "{selectedCategory.join(', ')}"
                    </span>
                )}
            </div>
            <div className="flex items-center">
                <span className="mr-2">Applied Filters:</span>
                {selectedCategory.map((category, index) => (
                    <div key={index} className="flex items-center bg-gray-200 rounded-full px-3 py-1 mr-2">
                        <span>{category}</span>
                        <button
                            className="ml-2 text-red-500"
                            onClick={() => onRemoveCategory(category)}
                        >
                            x
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterSummary;