import React, { useCallback, useMemo, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList/ProductList";
import Sidebar from "../components/Sidebar";
import SortBy from "../components/SortBy";
import BreadCrumb from "../components/BreadCrumb";
import { useNavigate } from "react-router-dom";
import products from "../components/ProductTest"; // Import products from ProductTest

const Product = () => {
  const navigate = useNavigate();

  const [productFilters, setProductFilters] = useState({
    selectedCategories: {
      brand: "",
      price: "",
      size: "",
    },
    sortOption: "popularity",
  });

  const handleCategoryChange = useCallback((category) => {
    const [group, value] = category.split(":");

    setProductFilters((prevFilters) => {
      return {
        ...prevFilters,
        selectedCategories: {
          ...prevFilters.selectedCategories,
          [group]: value,
        },
      };
    });
  }, []);

  const handleRemoveCategory = useCallback((group) => {
    setProductFilters((prevFilters) => {
      return {
        ...prevFilters,
        selectedCategories: {
          ...prevFilters.selectedCategories,
          [group]: null,
        },
      };
    });
  }, []);

  const handleProductClick = (id) => {
    navigate(`/Products/${id}`);
  };

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-2xl font-bold">Product All</p>
            <SortBy
              sortOption={productFilters.sortOption}
              setSortOption={(newSortOption) =>
                setProductFilters((prev) => ({
                  ...prev,
                  sortOption: newSortOption,
                }))
              }
            />
          </div>
          <div className="my-5">
            <BreadCrumb />
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/4">
              <Sidebar
                onCategoryChange={handleCategoryChange}
                selectedCategory={productFilters.selectedCategories}
              />
            </div>
            <div className="w-full md:w-3/4 ml-0 md:ml-4">
              <ProductList
                products={products}
                selectedCategory={productFilters.selectedCategories}
                onCategoryChange={handleCategoryChange}
                onRemoveCategory={handleRemoveCategory}
                onProductClick={handleProductClick} // Pass the click handler
              />
            </div>
          </div>
        </div>
        <br />
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default React.memo(Product);
