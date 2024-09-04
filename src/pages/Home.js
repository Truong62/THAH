import React from "react";
import CardProduct from "../components/Card/CardProduct";
import ErrorBoundary from "../components/ErrorBoundary";
import ImageSlider from "../components/ImageSlider";
import Layout from "../components/Layout";
const Home = () => {
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
                <ErrorBoundary>
                    <CardProduct link="https://www.google.com" nameProduct="Product 1" price={100000} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" brand="Brand 1"></CardProduct>
                </ErrorBoundary>
            </Layout>
        </React.Fragment>
    );
};

export default Home;
