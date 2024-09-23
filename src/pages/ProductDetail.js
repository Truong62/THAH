import React from 'react';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout";
import BreadCrumb from "../components/BreadCrumb";


const ProductDetail = () => {
    return (
        <div>
            <Header/>
            <Layout>
                <BreadCrumb/>

                <div className='h-[500px]'></div>
            </Layout>
            <Footer/>
        </div>
    );
};

export default ProductDetail;