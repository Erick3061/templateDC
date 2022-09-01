import React from 'react';
import { Icon } from '@mdi/react';
import { NavLink } from 'react-router-dom';
import { color } from '../colors/colors';
import { mdiMenuDown } from '@mdi/js';
import { PropsRoutes } from './Nav';
import { mdiCircleMedium } from '@mdi/js';

interface Props {
    sectionName: string;
    isDropdown?: Array<{
        name: string;
        icon: string;
        routes: Array<PropsRoutes>
    }>
    routes?: Array<PropsRoutes>
}

export const Opc = ({ sectionName, isDropdown, routes }: Props) => {

    const ToggleClass = (Props: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        const element = Props.currentTarget;
        element.classList.toggle('section-opc-active');
        let dropdown = element.nextElementSibling;
        const iconLeft = element.querySelector('.icon-left');
        iconLeft?.classList.toggle('icon-left-up');
        dropdown?.classList.toggle('section-show');
    }

    return (
        <div key={`${sectionName}`} className='section' >
            {sectionName && <p className='section-name'>{sectionName}</p>}
            {
                isDropdown
                    ? isDropdown.map(({ icon, name, routes }) =>
                        <span key={`${name}`}>
                            <a key={`${sectionName}-`} className='section-opc' onClick={ToggleClass}>
                                {icon && <Icon className='icon' path={icon} />}
                                {name}
                                <Icon className='icon-left' path={mdiMenuDown} />
                            </a>
                            <span className='section-dropdown'>
                                {
                                    routes.map(R =>
                                        <NavLink key={`${R.name}`} className={'section-opc'} to={R.to} style={({ isActive }) => isActive ? { backgroundColor: color.colorPrimaryLight, color: 'white' } : {}}>
                                            <Icon className='icon' path={R.icon ? R.icon : mdiCircleMedium} />
                                            {R.name}
                                        </NavLink>
                                    )
                                }
                            </span>
                        </span>
                    )
                    : routes?.map(R =>
                        <NavLink key={`${R.name}`} className={'section-opc'} to={R.to} style={({ isActive }) => isActive ? { backgroundColor: color.colorPrimaryLight, color: 'white' } : {}}>
                            {R.icon && <Icon className='icon' path={R.icon} />}
                            {R.name}
                        </NavLink>
                    )

            }
        </div >
    )
}
