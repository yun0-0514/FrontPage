import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/Da" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
        </Routes>
    );
};

export default AppRoutes;