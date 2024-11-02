import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * @param currentPage
 * @param totalPages
 * @param onPageChange
 * @returns {Element}
 * @constructor
 */
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 3;

    if (totalPages <= 6) {
      pageNumbers.push(...Array.from({ length: totalPages }, (_, i) => i + 1));
    } else {
      if (currentPage <= maxPagesToShow) {
        pageNumbers.push(
          ...Array.from({ length: maxPagesToShow }, (_, i) => i + 1)
        );
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 1, totalPages);
      } else if (currentPage > totalPages - maxPagesToShow) {
        pageNumbers.push(1, 2, 3);
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, 2, 3);
        pageNumbers.push('...');
        pageNumbers.push(currentPage);
        pageNumbers.push('...');
        pageNumbers.push(totalPages - 1, totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-4">
      <button
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          className={`px-3 py-1 border rounded-md ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={page === '...'}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 border rounded-md bg-gray-200 hover:bg-gray-300"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
};

export default Pagination;
