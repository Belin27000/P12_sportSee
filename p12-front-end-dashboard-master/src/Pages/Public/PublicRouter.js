import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/Layouts/Layout.js';
import { Home, SelectUser, ComingSoon } from '@/Pages/index.js';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<SelectUser />} />
                <Route path="/Home" element={<SelectUser />} />

                <Route path="/home/:id" element={<Home />} />
                <Route path="/comingSoon" element={<ComingSoon />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;