import React from "react";
import Layout from "../components/Layout";
import CardProduct from "../components/Card/Card";
import ImageSlider from "../components/ImageSlider";

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
                            <input className="h-full outline-none" placeholder="Sreach ...."></input>
                        </div>
                    </div>
                </div>
                <ImageSlider></ImageSlider>
                <p className="text-2xl font-bold mb-5">Product new</p>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div className='grid' key={index}>
                            <CardProduct
                                nameProduct={"sịp"}
                                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                price={'10000000 VND'}
                            />
                        </div>
                    ))}
                </div>
                <p className="text-2xl font-bold mb-5">Product all</p>
                <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {objTest.map((item, index) => (
                        <div key={index}>
                            <CardProduct
                                nameProduct={"sịp"}
                                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                                price={'10000000 VND'}
                            />
                        </div>
                    ))}
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default Home;
