import Header from '../components/Header/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import StrategyIcon from '../components/SvgIcon/StrategyIcon';
import TechnologyIcon from '../components/SvgIcon/TechnologyIcon';
import ConsultingIcon from '../components/SvgIcon/ConsultingIcon';
import BannerCompany from '../components/SvgIcon/bannerCompany';
import { motion } from 'framer-motion';
import { STATS } from '../utils/Company/company';

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
          <div className="relative">
            <div className="w-full h-[500px] object-cover rounded-xl flex justify-center">
              <BannerCompany />
            </div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-white text-8xl font-bold p-4 rounded-lg">
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
            {STATS.map((stat, index) => (
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
                <h1 className="text-2xl font-bold text-blue-600">
                  {stat.title}
                </h1>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between gap-4">
            <div className="w-[calc(50%-0.5rem)] md:w-1/3 px-8 py-6 rounded-md border border-gray-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <StrategyIcon />
              </div>
              <h1 className="font-bold text-sm md:text-base mb-2">Strategy</h1>
              <p className="text-xs md:text-sm mb-4">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a
                className="font-bold text-blue-400 text-sm md:text-base"
                href="#"
              >
                Learn More
              </a>
            </div>

            <div className="w-[calc(50%-0.5rem)] md:w-1/3 px-8 py-6 rounded-md bg-blue-400 border border-gray-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <TechnologyIcon />
              </div>
              <h1 className="font-bold text-sm md:text-base mb-2 text-white">
                Technology
              </h1>
              <p className="text-xs md:text-sm mb-4 text-white">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a className="font-bold text-white text-sm md:text-base" href="#">
                Learn More
              </a>
            </div>

            <div className="w-full md:w-1/3 px-8 py-6 rounded-md border border-gray-300 flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <ConsultingIcon />
              </div>
              <h1 className="font-bold text-sm md:text-base mb-2">
                Consulting
              </h1>
              <p className="text-xs md:text-sm mb-4">
                There are many variations of passage of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <a
                className="font-bold text-blue-400 text-sm md:text-base"
                href="#"
              >
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
