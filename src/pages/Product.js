import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CardProduct from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Layout from '../components/Layout';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import SortBy from '../components/SortBy';

const Product = () => {
    const objTest = [
        {
            id: 1,
            name: "Autumn Dress",
            price: 85,
            originalPrice: 124,
            description: "Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm...",
            colors: 2
        },
        {
            id: 2,
            name: "Casual Shirt",
            price: 29,
            originalPrice: 35,
            description: "This is a description of the product",
            colors: 7
        },
        {
            id: 3,
            name: "Leather Coat",
            price: 35,
            originalPrice: 50,
            description: "This is a description of the product",
            colors: 7
        },
        {
            id: 4,
            name: "VNeck Shirt",
            price: 230,
            originalPrice: 300,
            description: "This is a description of the product",
            colors: 3
        },
        {
            id: 5,
            name: "Long Coat Outer",
            price: 12,
            originalPrice: 20,
            description: "This is a description of the product",
            colors: 7
        },
        {
            id: 6,
            name: "Denim Jacket",
            price: 32,
            originalPrice: 45,
            description: "This is a description of the product",
            colors: 5
        },
        {
            id: 7,
            name: "Basic Hoodie",
            price: 35,
            originalPrice: 50,
            description: "This is a description of the product",
            colors: 4
        },
        {
            id: 8,
            name: "Flanel Shirt",
            price: 42,
            originalPrice: 60,
            description: "This is a description of the product",
            colors: 8
        },
        {
            id: 9,
            name: "Turtleneck",
            price: 75,
            originalPrice: 100,
            description: "This is a description of the product",
            colors: 2
        },
        {
            id: 10,
            name: "Sweater",
            price: 50,
            originalPrice: 70,
            description: "This is a description of the product",
            colors: 3
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const [sortOption, setSortOption] = useState('popularity');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(objTest.length / itemsPerPage);

    const formatCurrency = (price) => {
        return price.toLocaleString('vi-VN', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }) + ' VND';
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredItems = selectedCategory
        ? objTest.filter(item => item.name.includes(selectedCategory))
        : objTest;

    const sortedItems = [...filteredItems].sort((a, b) => {
        switch (sortOption) {
            case 'priceLowToHigh':
                return a.price - b.price;
            case 'priceHighToLow':
                return b.price - a.price;
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    const currentItems = sortedItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const truncateDescription = (description, maxWords) => {
        if (typeof description !== 'string') {
            return description;
        }
        const words = description.split(' ');
        if (words.length > maxWords) {
            return words.slice(0, maxWords).join(' ') + '...';
        }
        return description;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <React.Fragment>
            <Header/>
            <Layout>
                <div className="flex flex-col md:flex-row overflow-x-hidden">
                    <div className="w-full md:w-1/4 hidden md:block">
                        <Sidebar onCategoryChange={handleCategoryChange} />
                    </div>
                    <div className="w-full md:w-3/4 ml-0 md:ml-4">
                        <div className="flex justify-between items-center mb-5">
                            <p className="text-2xl font-bold">Product all</p>
                            <SortBy />
                        </div>
                        <div className="hidden md:grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {currentItems.map((item, index) => (
                                <CardProduct
                                    key={index}
                                    nameProduct={item.name}
                                    description={truncateDescription(item.description, 14)} // Giới hạn số từ ở đây
                                    price={formatCurrency(item.price)}
                                    brand={"Brand"}
                                    nametag={["#tag1", "#tag2", "#tag3"]}
                                />
                            ))}
                        </div>
                        <div className="md:hidden">
                            <Slider {...settings}>
                                {sortedItems.map((item, index) => (
                                    <div key={index} className="p-2">
                                        <CardProduct
                                            nameProduct={item.name}
                                            description={truncateDescription(item.description, 14)} // Giới hạn số từ ở đây
                                            price={formatCurrency(item.price)}
                                            brand={"Brand"}
                                            nametag={["#tag1", "#tag2", "#tag3"]}
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
                <br></br>
            </Layout>
            <Footer/>
        </React.Fragment>
    );
};

export default Product;