import React from 'react';
import './styles/styles.scss';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';


export const App = () => {
  return (
    <div className='container__full'>
      {(true) ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  )
}
