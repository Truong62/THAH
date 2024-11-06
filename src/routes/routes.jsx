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
import LoginForm from '../pages/Login';
import SignUpForm from '../pages/Signup';
import ForgotPassword from '../pages/ResetPassword/Forgot-password';
import EnterOtp from '../pages/ResetPassword/resetOTP';
import CreateNewPassword from '../pages/ResetPassword/CreateNewPassword';
import ResetSuccess from '../pages/ResetPassword/Reset-Success';
import EmailVerification from '../pages/EmailVerif';
import Congratulations from '../pages/Congratulations';
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
      <Route path="/signup" element={<SignUpForm></SignUpForm>} />
      <Route path="/login" element={<LoginForm></LoginForm>} />
      <Route
        path="/forgotpassword"
        element={<ForgotPassword></ForgotPassword>}
      />
      <Route path="/enter-otp" element={<EnterOtp></EnterOtp>} />
      <Route
        path="/create-new-password"
        element={<CreateNewPassword></CreateNewPassword>}
      />
      <Route path="/reset-success" element={<ResetSuccess></ResetSuccess>} />
      <Route
        path="/email-verification"
        element={<EmailVerification></EmailVerification>}
      />
      <Route
        path="/congratulations"
        element={<Congratulations></Congratulations>}
      />

      <Route path="/hiep" element={<h1>hiep</h1>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
