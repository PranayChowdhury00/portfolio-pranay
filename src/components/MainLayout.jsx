import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Navbar from '../Pages/nav/Navbar';
import Footer from '../Pages/Footer/Footer';

const MainLayout = () => {
    const location = useLocation();

    // Exclude Navbar and Footer for specific routes
    const excludedPaths = ['/login', '/register'];
    const showLayoutComponents = !excludedPaths.includes(location.pathname);

    return (
        <div>
            {showLayoutComponents && <Navbar />}
            <Outlet />
            {showLayoutComponents && <Footer />}
        </div>
    );
};

export default MainLayout;
