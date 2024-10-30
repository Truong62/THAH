import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Hàm kiểm tra xem một giá trị có phải là số hay không
const isNumber = (value) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

const BreadCrumb = ({ productName }) => {
  // Nhận productName như một prop
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumbName = (name) => {
    const decodedName = decodeURIComponent(name); // Decode the URL component
    return decodedName
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const createLink = (index) => `/${pathnames.slice(0, index + 1).join('/')}`;

  return (
    <div className="flex">
      <h3 className="p-2 pl-0 ">
        <Link
          to="/"
          className="text-sm font-bold text-dark-grey-700 hover:text-blue-400 cursor-pointer"
        >
          Home
        </Link>
      </h3>
      {pathnames.map((name, index) => {
        // Chỉ hiển thị tên sản phẩm nếu không phải là ID
        if (isNumber(name)) return null; // Ẩn nếu name là số
        return (
          <React.Fragment key={index}>
            <h3 className="p-2"> &gt; </h3>
            <h3 className="p-2 pl-0 ">
              <Link
                to={createLink(index)}
                className="text-sm font-bold text-dark-grey-700 hover:text-blue-400 cursor-pointer"
              >
                {formatBreadcrumbName(name)}
              </Link>
            </h3>
          </React.Fragment>
        );
      })}
      {productName && ( // Hiển thị tên sản phẩm nếu có
        <>
          <h3 className="p-2"> &gt; </h3>
          <h3 className="p-2 pl-0 ">
            <span className="text-sm font-bold text-dark-grey-700">
              {productName} {/* Hiển thị tên sản phẩm */}
            </span>
          </h3>
        </>
      )}
    </div>
  );
};

export default BreadCrumb;
