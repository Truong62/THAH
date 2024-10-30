import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import ProductDetailsCard from '../components/ProductDetailsCard';
import SuggestProducts from '../components/suggestProducts';
import products from '../data.json'; // Nhập mảng sản phẩm từ data.json
import details from '../details.json'; // Nhập tệp details.json
import { useParams } from 'react-router-dom'; // Nhập useParams để lấy tham số từ URL

const ProductDetail = () => {
  const { productId } = useParams(); // Lấy productId từ URL
  const product = products.find((p) => p.productId === parseInt(productId)); // Tìm sản phẩm theo productId
  const productDetail = details.find(
    (d) => d.productId === parseInt(productId)
  ); // Tìm chi tiết sản phẩm theo productId

  if (!product || !productDetail) {
    return <h1>Product not found</h1>; // Hiển thị thông báo nếu không tìm thấy sản phẩm
  }

  return (
    <div>
      <Header />
      <Layout>
        <BreadCrumb productName={product.productName} />{' '}
        {/* Chỉ truyền tên sản phẩm cho Breadcrumb */}
        <ProductDetailsCard productDetail={productDetail} />{' '}
        {/* Truyền thông tin chi tiết sản phẩm */}
        <div className="py-4 text-center">
          <h2 className="text-xl font-bold text-gray-800">
            Product Suggestions
          </h2>
          <div className="rounded-lg p-4">
            <SuggestProducts products={products} />
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProductDetail;
