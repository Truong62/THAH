import React from 'react';

const FilterSummary = ({ selectedCategory, onRemoveCategory }) => {
  return (
    <div
      className="flex justify-between items-center p-4 border border-gray-300 rounded-lg mb-4"
      style={{ minHeight: '50px' }}
    >
      {/*<div className="hidden md:block">*/}
      {/*    {selectedCategory.length > 0 && (*/}
      {/*        <span>*/}
      {/*            Showing {filteredResults} results from total {totalResults} for "{selectedCategory.join(', ')}"*/}
      {/*        </span>*/}
      {/*    )}*/}
      {/*</div>*/}
      {/*chư cần thiết vì cần api*/}
      <div className="flex items-center">
        <span className="mr-2">Filters by: </span>
        {Object.entries(selectedCategory).map(
          ([key, value]) =>
            value && (
              <div
                key={key}
                className="flex items-center px-2 rounded-xl bg-blue-200 mr-2 text-[#303030]"
              >
                <span>{`${key}: ${value}`}</span>
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

export default FilterSummary;
