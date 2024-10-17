import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import ProductDetailsCard from '../components/ProductDetailsCard';

const ProductDetail = () => {
  return (
    <div>
      <Header />
      <Layout>
        <BreadCrumb />
        <ProductDetailsCard />
        <div className="h-[500px]"></div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProductDetail;
