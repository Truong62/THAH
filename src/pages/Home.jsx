import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardProduct from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';
import { truncateDescription } from '../utils/truncateDescription';
import { formatCurrency } from '../utils/formatCurrency';
import products from '../data.json';
import { motion } from 'framer-motion';

const Home = () => {
  const tag = ['#nike', '#jordan', '#sale'];
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };
  return (
    <React.Fragment>
      <Header />
      <Layout>
        <ImageSlider />

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="flex items-center mt-3">
            <img className="w-[40px] mr-2" src="../../images/shoe.gif" alt="" />
            <p className="text-2xl font-bold ">Product new</p>
            <img
              className="w-[40px] ml-2 transform scale-x-[-1]"
              src="../../images/shoe.gif"
              alt=""
            />
          </div>
        </motion.div>
        <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 8).map((product, index) => (
            <div key={index}>
              <CardProduct
                nameProduct={truncateDescription(product.productName, 20)}
                description={truncateDescription(
                  product.productDescription,
                  45
                )}
                price={formatCurrency(product.variants[0].price)}
                brand={product.brandName}
                nameTag={tag}
                imageUrl={product.variants[0].images[0]}
                onClick={() => handleProductClick(product.productName)}
              />
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.0 }}
        >
          <div className="flex items-center mb-3">
            <img className="w-[40px] mr-2" src="../../images/shoe.gif" alt="" />
            <p className="text-2xl font-bold ">Products</p>
            <img
              className="w-[40px] ml-2 transform scale-x-[-1]"
              src="../../images/shoe.gif"
              alt=""
            />
          </div>
        </motion.div>
        <div className="grid gap-5 mb-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.slice(0, 4).map((product, index) => (
            <div key={index}>
              <CardProduct
                nameProduct={truncateDescription(product.productName, 20)}
                description={truncateDescription(
                  product.productDescription,
                  45
                )}
                price={formatCurrency(product.variants[0].price)}
                brand={product.brandName}
                nameTag={tag}
                imageUrl={product.variants[0].images[0]}
                onClick={() => handleProductClick(product.productName)}
              />
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-3xl relative">
          <img
            className="w-full object-fill shadow-xl rounded-3xl transform transition-transform duration-1000 hover:scale-110"
            alt="banner"
            src="https://theme.hstatic.net/200000238513/1000665981/14/banner_project_1.jpg?v=23"
          />
          <a
            href={'/products'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-1000"
          >
            <div className="bg-amber-50 hover:bg-[#A8DCE7] px-8 py-2 rounded-lg ">
              <p className="font-bold text-xl ">Buy Now</p>
            </div>
          </a>
        </div>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
