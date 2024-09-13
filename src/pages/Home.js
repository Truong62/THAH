import React from "react";
import {Link} from "react-router-dom";
import CardProduct from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ImageSlider from "../components/ImageSlider";
import Layout from "../components/Layout";
import {truncateDescription} from "../utils/truncateDescription";

const Home = () => {
    const objTest = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
        {
            id: 4
        }
    ];

    const formatCurrency = (price) => {
        return price.toLocaleString('vi-VN', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
    };

    const tag = ["#nike", "#jordan", "#sale"]

    return (
        <React.Fragment>
            <Header/>
            <Layout>
                <ImageSlider/>
                <div className='flex items-center mt-3'>
                    <img className='w-[40px] mr-2' src='../../images/shoe.gif' alt=''/>
                    <p className="text-2xl font-bold ">Product new</p>
                    <img className='w-[40px] ml-2 transform scale-x-[-1]' src='../../images/shoe.gif' alt=''/>
                </div>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div
                            key={index}
                        >
                            <CardProduct
                                nameProduct={truncateDescription("Nike Air Jordan 1", 20)}
                                description={truncateDescription("Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm còn cấp 13, giật cấp 16, vẫn rất mạnh. Với sức gió này, nhà mái tôn bị thổi bay nóc, tường bao có thể đổ. Bão sau đó đi vào các tỉnh Quảng Ninh - Ninh Bình và suy yếu thành áp thấp nhiệt đới.", 70)}
                                price={formatCurrency(10000000) + ' VND'}
                                brand={"Nike"}
                                nameTag={tag}
                            />
                        </div>
                    ))}
                </div>
                <div className='flex items-center mb-3'>
                    <img className='w-[40px] mr-2' src='../../images/shoe.gif' alt=''/>
                    <p className="text-2xl font-bold ">Product all</p>
                    <img className='w-[40px] ml-2 transform scale-x-[-1]' src='../../images/shoe.gif' alt=''/>
                </div>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div key={index}>
                            <CardProduct
                                nameProduct={truncateDescription("New Balance Fresh Foam X 860 v14 - Slate Grey / Chrome Blue", 20)}
                                description={truncateDescription("Lorem ipsum dolor sit amet, conse ctetur adipiscing sdsđâsdasdsadsd dsds dsd dsdfs dfsdf elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 70)}
                                price={formatCurrency(10000000)}
                                brand={"Nike"}
                                nameTag={tag}
                            />
                        </div>
                    ))}
                </div>
                <div className='overflow-hidden rounded-3xl relative'>
                    <img
                        className='w-full object-fill shadow-xl rounded-3xl transform transition-transform duration-1000 hover:scale-110'
                        alt='banner'
                        src='https://theme.hstatic.net/200000238513/1000665981/14/banner_project_1.jpg?v=23'
                    />
                    <Link to={'/products'}
                          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-1000'>
                        <div className='bg-amber-50 hover:bg-blue-500 px-8 py-2 rounded-lg '>
                            <p className='font-bold text-xl '>
                                Buy Now
                            </p>
                        </div>
                    </Link>
                </div>
            </Layout>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;
