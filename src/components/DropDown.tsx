import React from 'react';
import { Icon } from '@mdi/react';
import { mdiCircleMedium, mdiChevronDown } from '@mdi/js';
import { PropsRoute } from '../interfaces/interfaces';
import { NavLink } from 'react-router-dom';
import { Nav } from './Nav';

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
                {routes.map(R => <Nav key={`${R.name}`} icon={R.icon} name={R.name} to={R.to} />)}
            </div>
        </>
    )
}
