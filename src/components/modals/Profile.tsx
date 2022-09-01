import React from 'react';

import { mdiLockOpen } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';

import { Icon } from '@mdi/react';

export const Profile = () => {
    return (
        <div id='modalProfile' className='container-profile'>
            <div className='header'>
                <Icon className='icon' path={mdiAccountCircle} />
                <span>
                    <p id='name'>Erick Andrade Ramos</p>
                    <p id='role'>Empelado</p>
                </span>
            </div>
            <div className='body'></div>
            <div className='footer'>
                <button onClick={props => alert('cerrar sesión')}>
                    <Icon className='icon' path={mdiLockOpen} /> Cerrar sesión
                </button>
            </div>
        </div>
    )
}
