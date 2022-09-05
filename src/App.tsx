import React from 'react';
import './styles/styles.scss';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';


export const App = () => {
  // document.addEventListener('keydown', key => {
  //   console.log(key);
  // })
  return (
    <div className='container__full'>
      {(true) ? <PrivateRoutes /> : <PublicRoutes />}
    </div>
  )
}
