import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";

const Blogs = () => {
  return (
    <>
      <Header />
      <Layout>
        <BreadCrumb />
      </Layout>
      <Footer />
    </>
  );
};

export default Blogs;
