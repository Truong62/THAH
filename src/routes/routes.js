import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from '../pages/Home';
import Blogs from "../pages/Blogs";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}/>
            <Route path="/blogs" element={<Blogs></Blogs>}/>
            {/* test */}
            <Route path="/huong" element={<h1>huong</h1>}/>
            <Route path="/hiep" element={<h1>hiep</h1>}/>
        </Routes>
    );
};

export default AppRoutes;
