import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
        <>
            <Routes >
                <Route path="/" element={<h1>home</h1>} />





                {/* test */}
                <Route path="/huong" element={<h1>huong</h1>}/>
                <Route path="/hiep" element={<h1>hiep</h1>}/>
            </Routes>
        </>
    );
};

export default AppRoutes;
