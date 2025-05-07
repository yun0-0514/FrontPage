import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Drivers from '../pages/Driver';
import Products from '../pages/Products';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/products" element={<Products />} />
            <Route path="Insight" element={<Dashboard />} />
        </Routes>
    );
};

export default AppRoutes;