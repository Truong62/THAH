import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const isHome = location.pathname === '/';
    const createLink = (index) => `/${pathnames.slice(0, index + 1).join('/')}`;

    return (
        !isHome && (
            <div className="breadcrumb-container relative mt-[80px] mb-4 p-4 bg-gray-100 rounded-lg shadow-md z-10">
                <div className="flex text-lg font-medium items-center">
                    <h3 className="p-2 pl-0 capitalize">
                        <Link to="/" className="text-sm text-dark-grey-700 hover:text-blue-400 cursor-pointer">
                            Home
                        </Link>
                    </h3>
                    {pathnames.length > 0 && (
                        <>
                            {pathnames.map((name, index) => {
                                const isLast = index === pathnames.length - 1;
                                return (
                                    <React.Fragment key={index}>
                                        <h3 className="p-2"> &gt; </h3>
                                        <h3 className="p-2 pl-0 capitalize">
                                            <Link
                                                to={createLink(index)}
                                                className="text-sm text-dark-grey-700 hover:text-blue-400 cursor-pointer"
                                            >
                                                {name}
                                            </Link>
                                        </h3>
                                    </React.Fragment>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        )
    );
};

export default BreadCrumb;
