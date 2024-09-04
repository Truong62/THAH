import React from "react";
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
          <div>dsdasdsa</div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
