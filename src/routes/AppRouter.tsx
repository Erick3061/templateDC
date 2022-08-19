import React from 'react';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => (
    (true) ? <PrivateRoutes /> : <PublicRoutes />
)
