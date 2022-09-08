import React, { useEffect, useState } from 'react';
import { Icon } from "@mdi/react";
import { mdiAccount, mdiMenu } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { propsShowModal } from '../interfaces/IModal';
import { Profile } from '../components/modals/Profile';
import { Search } from '../components/modals/Search';

interface Modal {
    modal: string;
    classOpen: string;
    idModal: string;
    element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
}

export const TopNav = () => {
    const [nameModal, setNameModal] = useState<Modal | undefined>(undefined);

    const showModal = () => {
        if (nameModal) {
            const Modal = document.getElementById(nameModal.modal);
            const modalOpen = document.getElementById(nameModal.idModal);
            Modal?.classList.add(nameModal.classOpen);
            modalOpen?.classList.add(`${modalOpen.classList.value.split(' ')[0]}-show`);
        }
    }
    const closeModal = (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
        if (nameModal) {
            const Modal = document.getElementById(nameModal.modal);
            const modalOpen = document.querySelector(`#${nameModal.idModal}`);
            modalOpen?.classList.remove(`${modalOpen.classList.value.split(' ')[0]}-show`);
            Modal?.classList.remove(nameModal.classOpen);
        }
        setNameModal(undefined);
    }

    useEffect(() => {
        nameModal !== undefined && showModal();
    }, [nameModal])


    const nameClass: string = 'container__private_content_topnav';
    return (
        <>
            <nav className={nameClass}>
                <div className='left'>
                    <button className='square picon'
                        onClick={element => setNameModal({ modal: 'modal-search', element, classOpen: 'showModalTop', idModal: 'modalSearch' })}>
                        <Icon path={mdiMagnify} />
                    </button>
                    <span className='simpleSeparator'></span>
                    ssss
                </div>
                <div className='right'>
                    <button className='square-user'
                        onClick={element => setNameModal({ modal: 'modal-profile', element, classOpen: 'showModal', idModal: 'modalProfile' })}>
                        <Icon className='icon' path={mdiAccount} />
                    </button>
                    <button className='square-user picon menu'
                        onClick={element => {
                            const portal = document.querySelector('.container__private_portal');
                            const sideNav = document.querySelector('.container__private_sidenav');
                            portal?.classList.toggle('container__private_portal-show');
                            sideNav?.classList.toggle('showSidenav');
                        }}>
                        <Icon className='icon' path={mdiMenu} />
                    </button>
                </div>
                <Profile closeModal={closeModal} />
                <Search closeModal={closeModal} />
            </nav>
        </>
    )
}
