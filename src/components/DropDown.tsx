import React from 'react';
import { Icon } from '@mdi/react';
import { mdiCircleMedium, mdiChevronDown } from '@mdi/js';
import { PropsRoute } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom';

export const DropDown = ({ icon, routes, name }: { icon: string, routes: Array<PropsRoute>, name: string }) => {
    const ToggleClass = (Props: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const element = Props.currentTarget;
        element.classList.toggle('section-opc-active');
        let dropdown = element.nextElementSibling;
        const iconLeft = element.querySelector('.icon-left');
        iconLeft?.classList.toggle('icon-left-up');
        dropdown?.classList.toggle('section-show');
    }

    return (
        <>
            <a key={name} className='section-opc' onClick={ToggleClass}>
                <Icon className='icon' path={icon} />
                {name}
                <Icon className='icon-left' path={mdiChevronDown} />
            </a>
            <div className='section-dropdown' style={{ ['--opcs' as any]: routes.length }}>
                {
                    routes.map(R =>
                        <NavLink
                            onClick={() => {
                                const portal = document.querySelector(`.container__private_portal`);
                                portal?.classList.remove('container__private_portal-show');
                                const sidenav = document.querySelector('.container__private_sidenav');
                                sidenav?.classList.remove('showSidenav');
                            }}
                            key={`${R.name}`}
                            className={({ isActive }) => isActive ? 'section-dropdown-active' : 'section-dropdown-opc'}
                            style={({ isActive }) => isActive ? { display: 'flex', visibility: 'visible' } : {}} to={R.to}
                        >
                            <Icon className='icon' path={R.icon ? R.icon : mdiCircleMedium} />
                            {R.name}
                        </NavLink>
                    )
                }
            </div>
        </>
    )
}
