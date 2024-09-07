import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Product from '../pages/Product';
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            {/* test */}
            <Route path="/huong" element={<h1>huong</h1>}/>
            <Route path="/hiep" element={<h1>hiep</h1>}/>
            <Route path="/product" element={<Product></Product>}/>
        </Routes>
    );
};

export default AppRoutes;
