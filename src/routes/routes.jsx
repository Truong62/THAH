import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Blogs from '../pages/Blogs';
import BreadCrumb from '../components/BreadCrumb';
import Product from '../pages/Product';
import ProductDetail from '../pages/ProductDetail';
import PageNotFound from '../components/404NotFound/_404PageNotFound';
import CartPage from '../pages/Cart';
import CheckoutPage from '../pages/Checkout';

/**
 *
 * @returns {Element}
 * @constructor
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/blogs" element={<Blogs></Blogs>} />
      <Route path="/products" element={<Product></Product>} />
      <Route path="/products/:link" element={<ProductDetail></ProductDetail>} />
      <Route path="/productdetails" element={<ProductDetail></ProductDetail>} />
      <Route path="/cart" element={<CartPage></CartPage>} />
      <Route path="/checkout" element={<CheckoutPage></CheckoutPage>} />

      {/* test */}
      <Route path="/blogs/huong" element={<BreadCrumb />} />
      <Route path="/hiep" element={<h1>hiep</h1>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
