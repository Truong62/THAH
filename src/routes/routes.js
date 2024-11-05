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
import SignUpForm from '../pages/Signup';
import LoginForm from '../pages/Login';
import EmailVerification from '../pages/EmailVerif';
import Congratulations from '../pages/Congratulations';
import ResetSuccess from '../pages/ResetPassword/Reset-Success';
import ForgotPassword from '../pages/ResetPassword/Forgot-password';
import EnterOtp from '../pages/ResetPassword/resetOTP';
import CreateNewPassword from '../pages/ResetPassword/CreateNewPassword';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/productdetails" element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/blogs/huong" element={<BreadCrumb />} />
      <Route path="/hiep" element={<h1>hiep</h1>} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/signup" element={<SignUpForm />} />{' '}
      <Route path="/login" element={<LoginForm />} />{' '}
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="/reset-success" element={<ResetSuccess />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-otp" element={<EnterOtp />} />
      <Route path="/create-new-password" element={<CreateNewPassword />} />
    </Routes>
  );
};

export default AppRoutes;
