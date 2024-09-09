import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    console.log(pathnames);
    

    return (
        <div className="action-page">
            <div className="flex text-lg font-medium">
                {/* {pathnames.map((name, index) => {
                    const isLast = index === pathnames.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <h3 className="p-2 pl-0 capitalize">
                                {isLast ? (
                                    `${name}`
                                ) : (
                                    <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>
                                        {name}
                                    </Link>
                                )}
                            </h3>
                            {!isLast && <h3 className="p-2"> / </h3>}
                        </React.Fragment>
                    );
                })} */}
                hihi
            </div>
        </div>
    );
};

export default Breadcrumb;
