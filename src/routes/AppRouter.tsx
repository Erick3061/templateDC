import React from 'react';
import { HashRouter } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => (
    <HashRouter>
        {(true) ? <PublicRoutes /> : <PrivateRoutes />}
    </HashRouter>
)
