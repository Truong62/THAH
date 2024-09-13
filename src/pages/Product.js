import React, {useCallback, useMemo, useState} from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList/ProductList";
import Sidebar from "../components/Sidebar";
import SortBy from "../components/SortBy";
import BreadCrumb from "../components/BreadCrumb";

const Product = () => {
  const objTest = useMemo(
    () => [
      {
        id: 1,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 2,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 3,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 4,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 5,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 6,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 7,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 8,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 9,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
      {
        id: 10,
        name: "Autumn Dress",
        price: 85,
        originalPrice: 124,
        description:
          "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
        colors: 2,
      },
    ],
    []
  );

  const [productFilters, setProductFilters] = useState({
    selectedCategories: {
      brand: '',
      price: '',
      size: '',
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

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-col md:flex-row justify-between items-center  space-y-2 md:space-y-0">
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
          <div className='my-5'>
            <BreadCrumb/>
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
                products={objTest}
                selectedCategory={productFilters.selectedCategories}
                onCategoryChange={handleCategoryChange}
                onRemoveCategory={handleRemoveCategory}
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
