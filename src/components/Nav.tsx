import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Icon } from "@mdi/react";
import { mdiPowerStandby } from '@mdi/js';
import { mdiCalendar } from '@mdi/js';
import { mdiCardsHeart } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import { mdiPlus } from '@mdi/js';
import { mdiAccount } from '@mdi/js';
import { mdiDatabaseSettings } from '@mdi/js';
import { mdiOrderBoolDescending } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';

import { Opc } from './Opc';
import { Profile } from './modals/Profile';
import { Search } from './modals/Search';
import { propsShowModal } from '../interfaces/IModal';

export interface PropsRoutes {
    to: string;
    icon?: string;
    name: string;
}

export const SideNav = () => {

    const nameClass: string = 'container__private_sidenav';
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
        { to: '/sell', name: 'Venta' },
        { to: '/cutbox', name: 'Generar corte de caja' },
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
    const [idModal, setIdModal] = useState<string | undefined>(undefined);

    const showModal = (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>, { idModal, translate, start }: propsShowModal) => {
        setIdModal(idModal);

        const Modal = document.getElementById('general-modal');
        if (idModal && Modal) {
            const modalOpen = document.getElementById(idModal);
            Modal.classList.add('showModal');
            if (modalOpen) {
                if (translate) {
                    modalOpen.style.transform = `translateY(1rem)`;
                    modalOpen.style.transform += `translateX(-1.8rem)`;
                }
                modalOpen.classList.add('show');
            }
        }

    }
    const closeModal = (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
        const Modal = element.currentTarget.parentElement;
        if (idModal && Modal) {
            const modalOpen = document.querySelector(`#${idModal}`);
            modalOpen?.classList.remove('show');
            Modal.classList.remove('showModal');
        }
        setIdModal(undefined);
    }
    const nameClass: string = 'container__private_content_topnav';
    return (
        <>
            <nav className={nameClass}>
                <div className='left'>
                    <button className='square picon' onClick={element => showModal(element, { idModal: 'modalSearch', start: 'TL' })}>
                        <Icon path={mdiMagnify} />
                    </button>
                    <span className='simpleSeparator'></span>
                    ssss
                </div>
                <div className='right'>
                    <button className='square-user' onClick={element => showModal(element, { idModal: 'modalProfile', start: 'TR' })}>
                        <Icon className='icon' path={mdiAccount} />
                    </button>
                </div>
                <div id='general-modal' className='modal'>
                    <div className='full' onClick={closeModal}></div>
                    <Profile />
                    <Search />
                </div>
            </nav>
        </>
    )
}
