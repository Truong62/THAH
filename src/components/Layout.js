import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='max-w-[1280px] my-0 mx-auto'>
            {children}
        </div>
    );
};

export default Layout;