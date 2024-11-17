import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import StrategyIcon from '../components/SvgIcon/StrategyIcon';
import TechnologyIcon from '../components/SvgIcon/TechnologyIcon';
import ConsultingIcon from '../components/SvgIcon/ConsultingIcon';

const Company = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <div className="col-span-1">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=hai%20b%C3%A0%20tr%C6%B0ng,%20h%C3%A0%20N%E1%BB%99i%20+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>

      <Layout>
        <div className="mt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between mb-2 text-center md:text-left">
            <p className="text-black font-bold text-3xl mb-2 md:mb-0">
              Visit us and speak to <br /> our team today
            </p>
            <p className="text-black text-xs">
              It is a long established fact that. It is a long established fact
              <br /> that reader will be distracted
            </p>
          </div>

          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2022/08/02/04/11/city-7359471_640.jpg"
              alt="Banner"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                Sneaker Store
              </h1>
            </div>
          </div>

          <div className="text-center mt-8 p-5">
            <h1 className="font-bold text-4xl">
              Hear our story <br /> & learn who we are
            </h1>
            <p className="text-xs mt-4">
              There are many variations of passages of Lorem Ipsum available,
              <br /> but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-4 my-4">
            <div className="w-full md:w-1/3 p-8 md:p-20 text-center bg-blue-50 rounded-md">
              <h1 className="text-2xl font-bold">10+</h1>
              <p className="text-sm md:text-xs">years of service</p>
            </div>
            <div className="w-full md:w-1/3 p-8 md:p-20 text-center bg-blue-50 rounded-md">
              <h1 className="text-2xl font-bold">20K</h1>
              <p className="text-sm md:text-xs">happy customers</p>
            </div>
            <div className="w-full md:w-1/3 p-8 md:p-20 text-center bg-blue-50 rounded-md">
              <h1 className="text-2xl font-bold">94%</h1>
              <p className="text-sm md:text-xs">customer satisfaction</p>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-6">
            <div className="w-full md:w-1/3 px-16 py-10 rounded-md border border-gray-300 text-center flex flex-col items-center mb-6 md:mb-0">
              <div className="mb-4">
                <StrategyIcon />
              </div>
              <h1 className="font-bold text-xl mb-2">Strategy</h1>
              <p className="text-xs mb-4">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a className="font-bold text-blue-400" href="#">
                Learn More
              </a>
            </div>

            <div className="w-full md:w-1/3 px-16 py-10 rounded-md bg-blue-400 border border-gray-300 text-center flex flex-col items-center mb-6 md:mb-0">
              <div className="mb-4">
                <TechnologyIcon />
              </div>
              <h1 className="font-bold text-xl mb-2">Technology</h1>
              <p className="text-xs mb-4">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a className="font-bold text-white" href="#">
                Learn More
              </a>
            </div>

            <div className="w-full md:w-1/3 px-16 py-10 rounded-md border border-gray-300 text-center flex flex-col items-center">
              <div className="mb-4">
                <ConsultingIcon />
              </div>
              <h1 className="font-bold text-xl mb-2">Consulting</h1>
              <p className="text-xs mb-4">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a className="font-bold text-blue-400" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Company;
