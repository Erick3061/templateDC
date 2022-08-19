import React from 'react';
import Logo from '../assets/logo.png';
import { Icon } from "@mdi/react";
import { mdiPowerStandby } from '@mdi/js';
import { mdiCalendar } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';

export const SideBar = () => {
    const nameClass: string = 'container-sidebar';
    return (
        <nav className={nameClass}>
            <div className={`${nameClass}-top`}>
                <div className='container-img'>
                    <img className='logo' src={Logo} alt="img" />
                </div>
                <div className='container-user'>
                    <p id='name'>Erick Andrade Ramos</p>
                    <p id='role'>Empleado</p>
                </div>
                <div className='group'>
                    <p>Config</p>

                </div>
            </div>
            <div className={`${nameClass}-bottom`}>
                <span className="tooltip fade" data-title="Eventos">
                    <Icon className='squareIcon' path={mdiCalendar} />
                </span>
                <span className="tooltip fade" data-title="love">
                    <Icon className='squareIcon' path={mdiCardsHeart} />
                </span>
                <span className="tooltip fade" data-title="Cerrar sesión" onClick={() => alert('Cerrando sesión')}>
                    <Icon className='squareIcon' path={mdiPowerStandby} />
                </span>
            </div>
        </nav >
    )
}

export const NavBar = () => {
    const nameClass: string = 'container-navbar';
    return (
        <nav className='container-navbar'>
            navbar
        </nav>
    )
}
