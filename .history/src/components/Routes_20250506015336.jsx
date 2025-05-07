import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Drivers from '../pages/Driver';
import Products from '../pages/Products';
import Insight from '../pages/Insight';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Drivers" element={<Drivers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/Insight" element={<Insight />} />
        </Routes>
    );
};

export default AppRoutes;