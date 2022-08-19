import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { NavBar, SideBar } from '../components/Nav';

export const PrivateRoutes = () => {
    const Redirect = ({ to }: { to: string }): any => {
        let navigate = useNavigate();
        React.useEffect(() => {
            navigate(to);
        });
        return null;
    }

    return (
        <div className='container'>
            <SideBar />
            <div className='container-page'>
                <NavBar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<Redirect to="/" />} />
                </Routes>
            </div>
        </div>
    )
}
