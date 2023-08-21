import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/Layouts/Header/Header.js';
import SideMenu from './SideMenu/SideMenu.js';


const Layout = () => {
    return (
        <div className='Layout'>
            <Header />
            <main>
                <SideMenu />
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;