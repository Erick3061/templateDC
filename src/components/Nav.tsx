import React from 'react';
import Logo from '../assets/logo.png';
import { Icon } from "@mdi/react";
import { mdiPowerStandby } from '@mdi/js';
import { mdiCalendar } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { mdiDatabaseSettings } from '@mdi/js';
import { mdiOrderBoolDescending } from '@mdi/js';

import { Opc } from './Opc';

export interface PropsRoutes {
    to: string;
    icon?: string;
    name: string;
}

export const SideNav = () => {
    console.log(mdiPlus);

    const nameClass: string = 'container-sidenav';
    const Registro: Array<PropsRoutes> = [
        { to: '/providers', name: 'Proveedores' },
        { to: '/seasons', name: 'Temporadas' },
        { to: '/catalogues', name: 'Catálogos' },
        { to: '/products', name: 'Productos' },
        { to: '/clients', name: 'Clientes' },
        { to: '/users', name: 'Usuarios' },
    ];
    const ActionOrder: Array<PropsRoutes> = [
        { to: '/order_cancel', name: 'Cancelación' },
        { to: '/order_return', name: 'Devolución' },
        { to: '/order_change', name: 'Cambio' },
    ];
    const Genaral: Array<PropsRoutes> = [
        { to: '/order', name: 'Pedido' },
        { to: '/credit', name: 'Crédito' },
        { to: '/voucher', name: 'Vale' },
        { to: '/cutbox', name: 'Generar corte de caja' },
    ];
    const Config: Array<PropsRoutes> = [
        { to: '/', name: '' },
        { to: '/credit', name: 'Crédito' },
        { to: '/voucher', name: 'Vale' },
    ];
    return (
        <nav className={nameClass}>
            <div className={`${nameClass}-top`}>
                <div className='container-img'>
                    <img className='logo' src={Logo} alt="img" />
                </div>
                <div className='container-user'>
                    <Icon className='employee' path={mdiAccountCircle} />
                    <p id='name'>Erick Andrade Ramos</p>
                    <p id='role'>Empleado</p>
                </div>
                <Opc sectionName='General' routes={Genaral} />
                <Opc sectionName='Registro' isDropdown={[
                    { icon: mdiOrderBoolDescending, name: 'Acciones Pedido', routes: ActionOrder },
                    { icon: mdiDatabaseSettings, name: 'Administrar', routes: Registro }
                ]} />
                <Opc sectionName='Configuración' routes={Config} />

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

export const TopNav = () => {
    const nameClass: string = 'container-topnav';
    return (
        <nav className='container-topnav'>
            topnav
        </nav>
    )
}
