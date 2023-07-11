import React from 'react';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <main style={{ minHeight: '70vh' }}>{children}</main>
        </React.Fragment>
    );
};

Layout.defaultProps = {
    title: 'E-commerce',
    description: 'mern stack project',
    keywords: 'mern, react, node, mongodb',
    author: 'Khuong Nguyen Dang',
};

export default Layout;
