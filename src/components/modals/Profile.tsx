import React from 'react';
import { mdiLockOpen } from '@mdi/js';
import { mdiAccountCircle } from '@mdi/js';
import { Icon } from '@mdi/react';

interface Props {
    closeModal: (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
}

export const Profile = ({ closeModal }: Props) => {
    return (
        <div id='modal-profile' className='modalOne'>
            <div className='full' onClick={closeModal}></div>
            <div id='modalProfile' className='container-profile' style={{ ['--right' as any]: '1.8rem' }}>
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
        </div>
    )
}
