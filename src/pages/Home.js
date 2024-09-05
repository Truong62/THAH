import React from "react";
import CardProduct from "../components/Card/Card";
import ImageSlider from "../components/ImageSlider";
import Layout from "../components/Layout";

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
        }) + 'VND';
    };

    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    return (
        <React.Fragment>
            <Layout>
                <div className="flex justify-around items-center my-6">
                    <div className="flex items-center">
                        <img
                            className="w-[50px] rounded-2xl"
                            src="https://yt3.googleusercontent.com/HnAnUZS7d8LFtPHaHRtPH9nMoUmrsBBy_FDD-T-YQIycPW55peuWo1NO_rxPIswDbukXYlk7=s160-c-k-c0x00ffffff-no-rj"
                            alt=""
                        />
                        <div className="flex items-center ml-3 shadow-lg w-[250px] rounded-full p-4">
                            <input className="h-full outline-none" placeholder="Search ...."></input>
                        </div>
                    </div>
                </div>
                <ImageSlider></ImageSlider>
                <p className="text-2xl font-bold mb-5">Product new</p>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div
                            key={index}
                            className="border-3 border-gray-300 bg-white rounded-lg p-4 transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]"
                            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        >
                            <CardProduct
                                nameProduct={"Nike Air Jordan 1"}
                                description={truncateDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 100)}
                                price={formatCurrency(10000000)}
                                brand={"Nike"}
                            />
                        </div>
                    ))}
                </div>
                <p className="text-2xl font-bold mb-5">Product all</p>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div
                            key={index}
                            className="border-2 border-gray-300 bg-white rounded-lg p-4 transition-transform duration-300 ease-in-out flex flex-col justify-between h-full hover:translate-y-[-5px]"
                            style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
                        >
                            <CardProduct
                                nameProduct={"sịp"}
                                description={truncateDescription("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 100)}
                                price={formatCurrency(10000000)}
                                brand={"Nike"}
                            />
                        </div>
                    ))}
                </div>
                <div className='overflow-hidden rounded-3xl relative'>
                    <img
                        className='w-full object-fill shadow-xl opacity-85 rounded-3xl transform transition-transform duration-1000 hover:scale-110'
                        alt='banner'
                        src='https://theme.hstatic.net/200000238513/1000665981/14/banner_project_1.jpg?v=23'
                    />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                        <div className='bg-amber-50 px-8 py-2 rounded-lg'>
                            <p className='font-bold text-xl'>
                                Buy Now
                            </p>
                        </div>
                    </div>
                </div>

            </Layout>
        </React.Fragment>
    );
};

export default Home;
