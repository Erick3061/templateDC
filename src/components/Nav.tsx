import React from 'react';
import { Icon } from '@mdi/react';
import { NavLink } from 'react-router-dom';
interface Props {
    name: string,
    to: string,
    icon?: string,
}
export const Nav = ({ name, icon, to }: Props) => {
    return (
        <NavLink
            onClick={() => {
                const portal = document.querySelector(`.container__private_portal`);
                portal?.classList.remove('container__private_portal-show');
                const sidenav = document.querySelector('.container__private_sidenav');
                sidenav?.classList.remove('showSidenav');
            }}
            key={`${name}`}
            className={({ isActive }) => isActive ? 'section-opc-active' : 'section-opc'}
            to={to}
        >
            {icon && <Icon className='icon' path={icon} />}
            {name}
        </NavLink>
    )
}
