import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CardProduct from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ImageSlider from '../components/ImageSlider';
import Layout from '../components/Layout';
import { truncateDescription } from '../utils/truncateDescription';
import products from '../data.json'; // Import the JSON data
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper and SwiperSlide
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const Home = () => {
  const tag = ['#nike', '#jordan', '#sale'];
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  // Lọc sản phẩm mới (giả sử có thuộc tính isNew)
  const newProducts = products.filter((product) => product.isNew);

  return (
    <React.Fragment>
      <Header />
      <Layout>
        <ImageSlider />

        {/* Sản phẩm mới */}
        <div className="flex items-center mt-3">
          <img className="w-[40px] mr-2" src="../../images/shoe.gif" alt="" />
          <p className="text-2xl font-bold ">Product New</p>
          <img
            className="w-[40px] ml-2 transform scale-x-[-1]"
            src="../../images/shoe.gif"
            alt=""
          />
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <CardProduct
                nameProduct={truncateDescription(product.productName, 20)}
                description={truncateDescription(
                  product.productDescription,
                  45
                )}
                price={product.variant.$values[0]?.unitPrice || 0} // Kiểm tra variants
                brand={product.brandName}
                nameTag={tag}
                imageUrl={product.variant.$values[0].imagePath.$values[0] || ''} // Kiểm tra images
                onClick={() => handleProductClick(product.productId)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Sản phẩm tất cả */}
        <div className="flex items-center mb-3">
          <img className="w-[40px] mr-2" src="../../images/shoe.gif" alt="" />
          <p className="text-2xl font-bold ">Product All</p>
          <img
            className="w-[40px] ml-2 transform scale-x-[-1]"
            src="../../images/shoe.gif"
            alt=""
          />
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <CardProduct
                nameProduct={truncateDescription(product.productName, 20)}
                description={truncateDescription(
                  product.productDescription,
                  45
                )}
                price={product.variant.$values[0]?.unitPrice || 0} // Kiểm tra variants
                brand={product.brandName}
                nameTag={tag}
                imageUrl={product.variant.$values[0].imagePath.$values[0] || ''} // Kiểm tra images
                onClick={() => handleProductClick(product.productId)}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="overflow-hidden rounded-3xl relative">
          <img
            className="w-full object-fill shadow-xl rounded-3xl transform transition-transform duration-1000 hover:scale-110"
            alt="banner"
            src="https://theme.hstatic.net/200000238513/1000665981/14/banner_project_1.jpg?v=23"
          />
          <Link
            to={'/products'}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 transition-transform duration-1000"
          >
            <div className="bg-amber-50 hover:bg-blue-500 px-8 py-2 rounded-lg ">
              <p className="font-bold text-xl ">Buy Now</p>
            </div>
          </Link>
        </div>
      </Layout>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
