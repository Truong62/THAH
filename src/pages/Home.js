import React from 'react';
import { Link } from 'react-router-dom';
import CardProduct from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';
import { truncateDescription } from '../utils/truncateDescription';
import { formatCurrency } from '../utils/formatCurrency';
import { productData } from '../utils/data';
const Home = () => {
  const tag = ['#nike', '#jordan', '#sale'];

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <ImageSlider />
        <div className="mt-3 flex items-center">
          <img className="mr-2 w-[40px]" src="../../images/shoe.gif" alt="" />
          <p className="text-2xl font-bold ">Product new</p>
          <img
            className="ml-2 w-[40px] -scale-x-100"
            src="../../images/shoe.gif"
            alt=""
          />
        </div>
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {objTest.map((item, index) => (
            <div key={index}>
              <CardProduct
                nameProduct={truncateDescription('Nike Air Jordan 1', 20)}
                description={truncateDescription(
                  'Đến 10h ngày 7/9, tâm bão ở bắc vịnh Bắc Bộ, cách Quảng Ninh khoảng 120 km, sức gió giảm còn cấp 13, giật cấp 16, vẫn rất mạnh. Với sức gió này, nhà mái tôn bị thổi bay nóc, tường bao có thể đổ. Bão sau đó đi vào các tỉnh Quảng Ninh - Ninh Bình và suy yếu thành áp thấp nhiệt đới.',
                  70
                )}
                price={formatCurrency(10000000)}
                brand={'Nike'}
                nameTag={tag}
              />
            </div>
          ))}
        </div>
        <div className="mb-3 flex items-center">
          <img className="mr-2 w-[40px]" src="../../images/shoe.gif" alt="" />
          <p className="text-2xl font-bold ">Product all</p>
          <img
            className="ml-2 w-[40px] -scale-x-100"
            src="../../images/shoe.gif"
            alt=""
          />
        </div>
        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {productData.map((item, index) => (
            <div key={index}>
              <CardProduct
                nameProduct={truncateDescription(
                  'New Balance Fresh Foam X 860 v14 - Slate Grey / Chrome Blue',
                  20
                )}
                description={truncateDescription(
                  'Lorem ipsum dolor sit amet, conse ctetur adipiscing sdsđâsdasdsadsd dsds dsd dsdfs dfsdf elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                  70
                )}
                price={formatCurrency(10000000)}
                brand={'Nike'}
                nameTag={tag}
              />
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-3xl">
          <img
            className="w-full rounded-3xl object-fill shadow-xl transition-transform duration-1000 hover:scale-110"
            alt="banner"
            src="https://theme.hstatic.net/200000238513/1000665981/14/banner_project_1.jpg?v=23"
          />
          <Link
            to={'/Products'}
            className="absolute left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-1000"
          >
            <div className="rounded-lg bg-amber-50 px-8 py-2 hover:bg-blue-500 ">
              <p className="text-xl font-bold ">Buy Now</p>
            </div>
          </Link>
        </div>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
