import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import StrategyIcon from '../components/SvgIcon/StrategyIcon';
import TechnologyIcon from '../components/SvgIcon/TechnologyIcon';
import ConsultingIcon from '../components/SvgIcon/ConsultingIcon';
import BannerCompany from '../components/SvgIcon/bannerCompany';
import { motion } from 'framer-motion';
import { STATS } from '../utils/Company/company';
import React from 'react';
import './style.scss';

const Company = () => {
  const cardVariants = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'bottom' ? 50 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 2.8, type: 'spring' },
    },
  };

  const renderStatsCards = () =>
    STATS.map((stat, index) => (
      <motion.div
        key={index}
        custom={stat.direction}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className={`${
          index === 2 ? 'w-full' : 'w-[calc(50%-0.5rem)]'
        } md:w-1/3 p-8 md:p-20 text-center bg-blue-50 rounded-md shadow-md hover:shadow-lg`}
      >
        <h1 className="text-2xl font-bold text-blue-600">{stat.title}</h1>
        <p className="text-sm text-gray-600">{stat.description}</p>
      </motion.div>
    ));

  const renderFeatureCards = () => (
    <div className="baner-css">
      {[
        {
          icon: <StrategyIcon />,
          title: 'Strategy',
          description:
            'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
          linkText: 'Learn More',
          linkStyle: 'text-blue-400',
        },
        {
          icon: <TechnologyIcon />,
          title: 'Technology',
          description:
            'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
          linkText: 'Learn More',
          linkStyle: 'text-white',
          bgStyle: 'bg-blue-400 text-white',
        },
        {
          icon: <ConsultingIcon />,
          title: 'Consulting',
          description:
            'There are many variations of passage of Lorem Ipsum available, but the majority have suffered alteration.',
          linkText: 'Learn More',
          linkStyle: 'text-blue-400',
        },
      ].map((feature, index) => (
        <div
          key={index}
          className={`w-full md:w-1/3 px-8 py-6 rounded-md border border-gray-300 flex flex-col items-center text-center ${
            feature.bgStyle || ''
          }`}
        >
          <div className="flex items-center justify-center mb-4">
            {feature.icon}
          </div>
          <h1 className="font-bold text-sm md:text-base mb-2">
            {feature.title}
          </h1>
          <p className="text-xs md:text-sm mb-4">{feature.description}</p>
          <a
            className={`font-bold text-sm md:text-base ${feature.linkStyle}`}
            href="#"
          >
            {feature.linkText}
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Header />
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
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between mb-2 text-center md:text-left">
              <p className="text-black font-bold text-3xl mb-2 md:mb-0">
                Visit us and speak to <br /> our team today
              </p>
              <p className="text-black text-sm">
                It is a long established fact that. It is a long established
                fact
                <br /> that reader will be distracted
              </p>
            </div>
          </motion.div>
          <div className="relative w-full h-[300px] sm:h-[200px] md:h-[400px] overflow-hidden mt-8">
            <div className="absolute inset-0">
              <BannerCompany className="w-full h-[500px] object-cover" />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-white text-4xl sm:text-5xl font-bold p-4 rounded-lg bg-opacity-60">
                Sneaker Store
              </h1>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5 }}
            className="text-center mt-8 p-5"
          >
            <h1 className="font-bold text-4xl">
              Hear our story <br /> & learn who we are
            </h1>
            <p className="text-sm mt-4">
              There are many variations of passages of Lorem Ipsum available,
              <br /> but the majority have suffered alteration in some form, by
              injected humour
            </p>
          </motion.div>
          <div className="flex flex-wrap md:flex-nowrap gap-4 my-4">
            {renderStatsCards()}
          </div>
          {renderFeatureCards()}
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Company;
