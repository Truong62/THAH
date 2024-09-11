import React, { useCallback, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { formatCurrency } from '../../utils/formatCurrency';
import CardProduct from '../Card/Card';
import FilterSummary from '../FilterSummary';
import Pagination from '../Pagination';
import useDeviceType from "../../hooks/useDeviceType";

const ProductList = ({ products, selectedCategory, onCategoryChange, onRemoveCategory }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const { isMobile } = useDeviceType();
    const itemsPerPage = 6;
    const totalPages = Math.ceil(products.length / itemsPerPage);


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
            return products.slice(0, currentPage * itemsPerPage);
        } else {
            return products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
        }
    }, [products, currentPage, itemsPerPage, isMobile]);

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
                        {currentItems.map((item, index) => (
                            <CardProduct
                                key={index}
                                nameProduct={item.name}
                                description={truncateDescription(item.description, 14)}
                                price={formatCurrency(item.price)}
                                brand={"Brand"}
                                nametag={["#tag1", "#tag2", "#tag3"]}
                            />
                        ))}
                    </div>
                </InfiniteScroll>
            ) : (
                <div>
                    <div className="grid gap-5 mb-10 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                        {currentItems.map((item, index) => (
                            <CardProduct
                                key={index}
                                nameProduct={item.name}
                                description={truncateDescription(item.description, 14)}
                                price={formatCurrency(item.price)}
                                brand={"Brand"}
                                nametag={["#tag1", "#tag2", "#tag3"]}
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

export default ProductList;