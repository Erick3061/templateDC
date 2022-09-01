import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from '../pages/HomePage';
import { SideNav, TopNav } from '../components/Nav';

export const PrivateRoutes = () => {
    const Redirect = ({ to }: { to: string }): any => {
        let navigate = useNavigate();
        React.useEffect(() => {
            navigate(to);
        });
        return null;
    }
    const closeModal = (Props: React.MouseEvent<HTMLDivElement, MouseEvent>,) => {
        const padre = Props.currentTarget.parentElement;
        if (padre) {
            padre.style.display = 'none';
        }
    }

    const nameClass: string = 'container__private';
    return (
        <div className={nameClass}>
            <SideNav />
            <div className={`${nameClass}_content`}>
                <TopNav />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="*" element={<Redirect to="/" />} />
                </Routes>
            </div>
        </div>
    )
}
