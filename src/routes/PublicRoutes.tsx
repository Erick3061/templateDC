import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LogInPage } from '../pages/Public/LogInPage';

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LogInPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}
