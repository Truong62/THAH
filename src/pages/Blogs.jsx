import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout';
import BreadCrumb from '../components/BreadCrumb';
import React from 'react';
import { blogPosts } from '../data/dataBlog';

const Blogs = () => {
  const featuredPosts = blogPosts.slice(0, 2);
  return (
    <>
      <Header />
      <Layout>
        <BreadCrumb />
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Sneaker Blog
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="mb-12 bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="mr-4">{post.date}</span>
                      <span className="mr-4">•</span>
                      <span className="mr-4">By {post.author}</span>
                      <span className="mr-4">•</span>
                      <span>{post.readTime} min read</span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-gray-800 hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-5">{post.excerpt}</p>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {post.tags &&
                          post.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                            >
                              #{tag}
                            </span>
                          ))}
                      </div>

                      <a className="inline-flex items-center text-red-500 font-medium hover:text-red-600 transition-colors">
                        Read More
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <div className="text-center">
                  <img
                    src="https://cdn2.futurepedia.io/2024-11-26T18-51-51.356Z-MtXWJEI4O08DkXhcFo8z7VXOEe00XPWLb.webp?w=1920"
                    alt="Jay Dang"
                    className="rounded-full w-32 h-32 object-cover mx-auto mb-4 border-4 border-white shadow"
                  />
                  <h3 className="text-xl font-bold text-gray-800">Jay Dang</h3>
                  <p className="text-gray-500 font-medium mb-3">
                    SNEAKER ENTHUSIAST & BLOGGER
                  </p>
                  <p className="text-gray-600 mb-4">
                    Sharing my passion for sneakers and street fashion from the
                    vibrant streets of Ho Chi Minh City.
                  </p>

                  <div className="flex justify-center space-x-4 mb-4">
                    <a className="text-blue-600 hover:text-blue-800">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                      </svg>
                    </a>
                    <a className="text-pink-600 hover:text-pink-800">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                      </svg>
                    </a>
                    <a className="text-red-600 hover:text-red-800">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                      </svg>
                    </a>
                  </div>

                  <a className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition-colors">
                    ABOUT ME
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <h4 className="text-lg font-bold mb-6 text-gray-800 border-b pb-2">
                  ✨ Featured Articles
                </h4>

                <div className="space-y-4">
                  {featuredPosts.map((post) => (
                    <div key={post.id} className="flex items-center">
                      <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h5 className="font-medium text-gray-800 line-clamp-2 hover:text-red-500 transition-colors">
                          {post.title}
                        </h5>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-lg font-bold mb-6 text-gray-800 border-b pb-2">
                  🏷️ Tags
                </h4>
                <div className="flex flex-wrap gap-2">
                  {Array.from(
                    new Set(blogPosts.flatMap((post) => post.tags || []))
                  ).map((tag, index) => (
                    <a
                      key={index}
                      className="bg-gray-100 hover:bg-red-100 text-gray-700 hover:text-red-600 px-3 py-1 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default Blogs;
