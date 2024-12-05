import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import React from 'react';

const Blogs = () => {
  return (
    <>
      <Header />
      <BreadCrumb />
      <Layout></Layout>
      <Footer />
    </>
  );
};

export default Blogs;
