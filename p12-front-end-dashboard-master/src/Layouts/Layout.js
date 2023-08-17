import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/Layouts/Header/Header.js';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;