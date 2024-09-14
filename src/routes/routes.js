import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Blogs from "../pages/Blogs";
import BreadCrumb from "../components/BreadCrumb";
import Product from '../pages/Product';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/blogs" element={<Blogs></Blogs>}/>
            <Route path="/products" element={<Product></Product>}/>
            <Route path="/products/:id" element={<Product></Product>}/>

            {/* test */}
            <Route path="/blogs/huong" element={<BreadCrumb/>}/>
            <Route path="/hiep" element={<h1>hiep</h1>}/>
        </Routes>
    );
};

export default AppRoutes;
