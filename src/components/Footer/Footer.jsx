import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  return (
    <div className="bg-white text-center text-[#303030] dark:bg-neutral-600 dark:text-neutral-200 lg:text-left mt-10">
      <hr />
      <div className="mx-6 pt-10 pb-2 text-center md:text-left px-8 h-[350px]">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h6 className="mb-4 flex items-center justify-center font-bold uppercase md:justify-start">
              sneaker shop
            </h6>
            <hr />
            <p className=" mb-4 flex items-center justify-center md:justify-start">
              You can use rows and columns to organize your footer content
              effectively, making the layout clearer and easier to navigate.
              This is the perfect place to share important information about
              your brand, products, services, or customer support policies. We
              are committed to providing you with high-quality products,
              dedicated services, and an excellent shopping experience. Follow
              us to stay updated on the latest news, exclusive promotions, and
              the newest fashion trends. If you have any questions or need
              assistance, don’t hesitate to reach out to us!
            </p>
          </div>
          <div className="text-center ">
            <h6 className="relative group mb-4 flex font-bold justify-center uppercase text-lg">
              <span className="relative z-10">Products</span>
              <span className="absolute left-0 top-1/2 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-12"></span>
              <span className="absolute right-0 top-1/2 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-12"></span>
            </h6>
            <p className="mb-4">
              <Link to={'/'} className="text-[#303030] dark:text-neutral-200">
                NIKE
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to={'/'}
                className="font-semibold text-[#303030] dark:text-neutral-200"
              >
                Adidas
              </Link>
            </p>
            <p className="mb-4">
              <Link
                to={'/'}
                className="font-semibold text-[#303030] dark:text-neutral-200"
              >
                Vans
              </Link>
            </p>
            <p>
              <Link
                to={'/'}
                className="font-semibold text-neutral-600 dark:text-neutral-200"
              >
                MLB
              </Link>
            </p>
          </div>

          <div>
            <h6 className="mb-4 flex font-bold justify-center  uppercase md:justify-start">
              Contact
            </h6>
            <hr />
            <p className=" mb-4 flex items-center justify-center md:justify-start">
              VTC Online Building, 18 Đ. Tam Trinh, Mai Động, Hai Bà Trưng, Hà
              Nội
            </p>
            <p className=" mb-4 flex items-center justify-center md:justify-start">
              0981 114 757
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
