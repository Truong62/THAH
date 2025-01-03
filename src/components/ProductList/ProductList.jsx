import { useCallback, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { formatCurrency } from '../../utils/formatCurrency';
import CardProduct from '../Card/Card';
import FilterSummary from '../FilterSummary';
import Pagination from '../Pagination';
import useDeviceType from '../../hooks/useDeviceType';
import PropTypes from 'prop-types';
import React from 'react';

/**
 *
 * @param products{ProductType}
 * @param selectedCategory
 * @param onRemoveCategory
 * @param onProductClick
 * @returns {Element}
 * @constructor
 */
const ProductList = ({
  products,
  selectedCategory,
  onRemoveCategory,
  onProductClick,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isMobile } = useDeviceType();
  const totalPages = Math.ceil(products.length / 6);

  const fetchMoreData = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }, [currentPage, totalPages]);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const currentItems = useMemo(() => {
    if (isMobile) {
      return products.slice(0, currentPage * 6);
    } else {
      return products.slice((currentPage - 1) * 6, currentPage * 6);
    }
  }, [products, currentPage, isMobile]);

  const truncateDescription = useCallback((description, maxWords) => {
    if (typeof description !== 'string') {
      return description;
    }
    const words = description.split(' ');
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return description;
  }, []);

  return (
    <div>
      <FilterSummary
        selectedCategory={selectedCategory}
        onRemoveCategory={onRemoveCategory}
      />
      {isMobile ? (
        <InfiniteScroll
          dataLength={currentItems.length}
          next={fetchMoreData}
          hasMore={currentPage < totalPages}
          loader={
            <div className="flex justify-center my-4">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
          }
          endMessage={<p className="text-center">You have seen all products</p>}
        >
          <div className="grid gap-2 sm:gap-3 lg:gap-5 mb-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {currentItems.map((product, index) => (
              <CardProduct
                key={index}
                nameProduct={product.productName}
                description={truncateDescription(
                  product.productDescription || '',
                  14
                )}
                price={formatCurrency(product.variants[0].price)}
                brand={product.brandName}
                imageUrl={product.variants[0].images[0]}
                onClick={() => onProductClick(product.productName)}
              />
            ))}
          </div>
        </InfiniteScroll>
      ) : (
        <div>
          <div className="grid gap-5 mb-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {currentItems.map((product, index) => (
              <CardProduct
                key={index}
                nameProduct={product.productName}
                description={truncateDescription(
                  product.productDescription,
                  14
                )}
                price={formatCurrency(product.variants[0].price)}
                brand={product.brandName}
                imageUrl={product.variants[0].images[0]}
                onClick={() => onProductClick(product.productName)}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  selectedCategory: PropTypes.object.isRequired,
  onRemoveCategory: PropTypes.func.isRequired,
  onProductClick: PropTypes.func.isRequired,
};

export default ProductList;
