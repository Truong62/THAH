import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout";
import SuggestProducts from "../components/suggestProducts";


const Blogs = () => {
    const productData = [
        {
            link: "nike-air-jordan-1",
            name: "Nike Air Jordan 1",
            description: "Mẫu giày thể thao nổi bật của Nike.",
            price: 10000000,
            brand: "Nike",
            tag: ["Hot", "Sale"]
        },
        {
            link: "nike-air-max",
            name: "Nike Air Max",
            description: "Giày thể thao Nike Air Max mới nhất.",
            price: 12000000,
            brand: "Nike",
            tag: ["New"]
        },
        {
            link: "adidas-ultra-boost",
            name: "Adidas Ultra Boost",
            description: "Giày chạy bộ Adidas Ultra Boost.",
            price: 15000000,
            brand: "Adidas",
            tag: ["Popular"]
        },
        {
            link: "puma-rs-x",
            name: "Puma RS-X",
            description: "Giày thể thao Puma RS-X thời thượng.",
            price: 11000000,
            brand: "Puma",
            tag: ["Trending"]
        },
    ];
    return (
        <>
            <Header />
            <Layout>
            <SuggestProducts products={productData} />
            </Layout>
            <Footer />
        </>
    );
};

export default Blogs;
