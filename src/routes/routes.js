import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                {/* test */}
                <Route path="/huong" element={<h1>huong</h1>}/>
                <Route path="/hiep" element={<h1>hiep</h1>}/>
            </Routes>
        </>
    );
};

export default AppRoutes;
