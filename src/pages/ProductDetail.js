import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import ProductDetailsCard from '../components/ProductDetailsCard';
import SuggestProducts from "../components/suggestProducts";


const ProductDetail = () => {
  const productData = [
    {
      id: 1,
      link: "product-1",
      nameProduct: "Product 1",
      description: "Description for product 1",
      sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
      colors: ["White", "Black", "Green", "Yellow", "Purple"],
      price: 2000000,
      brand: "Brand 1",
      nameTag: ["Tag1", "Tag2"],
      mainImage:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2ce111f2-d961-485d-ad03-6a22d1ea78bb/WMNS+AIR+JORDAN+1+MM+LOW.png",
      images: [
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d709d9aa-15a1-49e5-83eb-776bc1ee2944/WMNS+AIR+JORDAN+1+MM+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/344aa6bf-4bc7-4c8b-9b61-41f3bf76fb59/WMNS+AIR+JORDAN+1+MM+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/dfe05417-cbdb-49bb-90d8-0993abcbc554/WMNS+AIR+JORDAN+1+MM+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0f1e9ef6-6bde-406e-ab6e-abd04ac18967/WMNS+AIR+JORDAN+1+MM+LOW.png",
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/4f6cd331-e93e-49a1-9286-2555d72d8295/WMNS+AIR+JORDAN+1+MM+LOW.png",
      ],
      whiteImages: [],
    },
    {
      id: 2,
      link: "product-2",
      nameProduct: "Product 2",
      description: "Description for product 2",
      price: "2000000",
      brand: "Brand 2",
      nameTag: ["Tag3", "Tag4"],
      mainImage: "https://example.com/main-image-2.jpg",
      images: [
        "https://example.com/image-2-1.jpg",
        "https://example.com/image-2-2.jpg",
        "https://example.com/image-2-3.jpg",
        "https://example.com/image-2-4.jpg",
        "https://example.com/image-2-5.jpg",
      ],
    },
    {
      id: 3,
      link: "product-3",
      nameProduct: "Product 3",
      description: "Description for product 3",
      price: "2000000",
      brand: "Brand 3",
      nameTag: ["Tag4", "Tag5"],
      mainImage: "https://example.com/main-image-2.jpg",
      images: [
        "https://example.com/image-2-1.jpg",
        "https://example.com/image-2-2.jpg",
        "https://example.com/image-2-3.jpg",
        "https://example.com/image-2-4.jpg",
        "https://example.com/image-2-5.jpg",
      ],
    },
    {
      id: 4,
      link: "product-4",
      nameProduct: "Product 4",
      description: "Description for product 4",
      price: "2000000",
      brand: "Brand 4",
      nameTag: ["Tag5", "Tag6"],
      mainImage: "https://example.com/main-image-2.jpg",
      images: [
        "https://example.com/image-2-1.jpg",
        "https://example.com/image-2-2.jpg",
        "https://example.com/image-2-3.jpg",
        "https://example.com/image-2-4.jpg",
        "https://example.com/image-2-5.jpg",
      ],
    },
  ];
  return (
    <div>
      <Header />
      <Layout>
        <BreadCrumb />
        <ProductDetailsCard />
        <div className="text-center py-4">
            <h2 className="text-xl font-bold text-gray-800">Product Suggestions</h2>
                <div className="bg-gray-100 p-4 rounded-lg">
                    <SuggestProducts products={productData} />
                </div>
            </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProductDetail;
