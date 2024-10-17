import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const formatBreadcrumbName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  const createLink = (index) => `/${pathnames.slice(0, index + 1).join('/')}`;

  return (
    <div className="flex">
      <h3 className="p-2 pl-0 ">
        <Link
          to="/"
          className="text-sm font-medium text-dark-grey-700 hover:text-blue-400 cursor-pointer"
        >
          Home
        </Link>
      </h3>
      {pathnames.map((name, index) => (
        <React.Fragment key={index}>
          <h3 className="p-2"> &gt; </h3>
          <h3 className="p-2 pl-0 ">
            <Link
              to={createLink(index)}
              className="text-sm font-medium text-dark-grey-700 hover:text-blue-400 cursor-pointer"
            >
              {formatBreadcrumbName(name)}
            </Link>
          </h3>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumb;
