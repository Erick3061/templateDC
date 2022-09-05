import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from '../pages/Private/HomePage';
import { TopNav } from './TopNav';
import { ProvidersPage } from '../pages/Private/ProvidersPage';
import { ClientsPage } from '../pages/Private/ClientsPage';
import { UsersPage } from '../pages/Private/UsersPage';
import { CutBoxPage } from '../pages/Private/CutBoxPage';
import { CreditPage } from '../pages/Private/CreditPage';
import { VoucherPage } from '../pages/Private/VoucherPage';
import { SellPage } from '../pages/Private/SellPage';
import { OrderPage } from '../pages/Private/OrderPage';
import { ConfigPage } from '../pages/Private/ConfigPage';
import { SideNav } from './SideNav';

export const PrivateRoutes = () => {
    const nameClass: string = 'container__private';
    return (
        <div className={nameClass}>
            <SideNav />
            <div className={`${nameClass}_content`}>
                <TopNav />
                <Routes>
                    <Route path='/' element={<HomePage />} />

                    <Route path="order">
                        <Route path="new" element={<OrderPage />} />
                        <Route path="cancels" element={<OrderPage />} />
                        <Route path="rejects" element={<OrderPage />} />
                        <Route path="changes" element={<OrderPage />} />
                    </Route>

                    <Route path='/credit' element={<CreditPage />} />
                    <Route path='/voucher' element={<VoucherPage />} />
                    <Route path='/sell' element={<SellPage />} />
                    <Route path='/cut-box' element={<CutBoxPage />} />

                    <Route path='/providers' element={<ProvidersPage />} />
                    <Route path='/clients' element={<ClientsPage />} />
                    <Route path='/users' element={<UsersPage />} />

                    <Route path='/config' element={<ConfigPage />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </div>
        </div>
    )
}
