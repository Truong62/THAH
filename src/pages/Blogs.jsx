import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import React from 'react';

const Blogs = () => {
  const blogPosts = [
    {
      title: 'Hướng Dẫn Chọn Giày Chạy Bộ HOKA Tốt Nhất 2025',
      date: '1/8/2025',
      content:
        'Khi nói đến giày chạy bộ, sự thoải mái và hiệu suất luôn là điều ưu tiên hàng đầu. Hoka đã xuất hiện và tái định nghĩa những gì mà các runner có thể mong đợi từ đôi giày chạy của mình...',
      comments: 3,
    },
    {
      title: 'Cách chọn giày chạy bộ Nike phù hợp',
      date: '10/23/2024',
      content:
        'Chọn đúng cho mình một đôi giày thể thao chạy bộ thì rất quan trọng trong việc running...',
      comments: 15,
    },
    {
      title: 'Các mẫu giày Sneaker Basic mới đẹp nên có trong năm 2024',
      date: '9/15/2024',
      content:
        'Những mẫu sneaker basic mới đang là xu hướng và dễ phối đồ trong năm 2024...',
      comments: 8,
    },
  ];

  return (
    <>
      <Header />
      <BreadCrumb />
      <Layout>
        <div className="container mx-auto py-8 flex gap-8">
          <div className="w-3/4">
            {blogPosts.map((post, index) => (
              <div key={index} className="mb-8 border-b pb-6">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{post.comments} Comments</span>
                  <a href="#" className="text-blue-500">
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4">
            <div className="mb-8 text-center">
              <img
                src="/path-to-image.jpg"
                alt="Author"
                className="rounded-full w-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jay Dang</h3>
              <p className="text-gray-600">ADMIN - AUTHOR</p>
              <ul className="text-red-500 mt-4 space-y-2">
                <li>Facebook.com/vsneakerday</li>
                <li>Instagram.com/jaydang.tphcm</li>
                <li>youtube.com/littlejay.saigon</li>
              </ul>
              <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded">
                ABOUT ME
              </button>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">
                ✨ Bài Viết Nổi Bật
              </h4>
              <ul className="text-red-500 space-y-2">
                <li>Cách chọn giày chạy bộ Nike phù hợp</li>
                <li>Những mẫu giày Sneaker trắng vừa đẹp vừa dễ phối đồ</li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Blogs;
