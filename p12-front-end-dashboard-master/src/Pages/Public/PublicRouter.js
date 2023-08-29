import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from '@/Layouts/Layout.js';
import Home from '@/Pages/Acceuil/Home.js';
import ComingSoon from '@/Pages/ComingSoon/ComingSoon.js';


const PublicRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="/home/:id" element={<Home />} />
                <Route path="/comingSoon" element={<ComingSoon />} />
            </Route>
        </Routes>
    );
};

export default PublicRouter;