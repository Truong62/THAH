import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Blogs from "../pages/Blogs";
import BreadCrumb from "../components/BreadCrumb";
import Product from '../pages/Product';
import ProductDetail from "../pages/ProductDetail";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/blogs" element={<Blogs></Blogs>}/>
            <Route path="/products" element={<Product></Product>}/>
            <Route path="/products/:id" element={<ProductDetail></ProductDetail>}/>

            {/* test */}
            <Route path="/blogs/huong" element={<BreadCrumb/>}/>
            <Route path="/hiep" element={<h1>hiep</h1>}/>
        </Routes>
    );
};

export default AppRoutes;
