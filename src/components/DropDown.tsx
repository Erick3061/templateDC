import React, { Children } from 'react'
import { Icon } from '@mdi/react';
import { mdiCircleMedium, mdiMenuDownOutline } from '@mdi/js';
import { PropsRoute } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom';
import { color } from '../colors/colors';

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
                <Icon className='icon-left' path={mdiMenuDownOutline} />
            </a>
            <span className='section-dropdown'>
                {
                    routes.map(R =>
                        <NavLink key={`${R.name}`} className={({ isActive }) => isActive ? 'section-opc-active' : 'section-opc'} to={R.to}>
                            <Icon className='icon' path={R.icon ? R.icon : mdiCircleMedium} />
                            {R.name}
                        </NavLink>
                    )
                }
            </span>
        </>
    )
}
