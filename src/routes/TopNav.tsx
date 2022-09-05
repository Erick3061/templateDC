import React, { useEffect, useState } from 'react';
import { Icon } from "@mdi/react";
import { mdiAccount } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { propsShowModal } from '../interfaces/IModal';
import { Profile } from '../components/modals/Profile';
import { Search } from '../components/modals/Search';

interface Modal {
    classOpen: string;
    idModal: string;
    start: 'TL' | 'TR' | 'Bl' | 'BR';
    element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>
}

export const TopNav = () => {
    const [nameModal, setNameModal] = useState<Modal | undefined>(undefined);

    const showModal = () => {
        if (nameModal) {
            const Modal = document.getElementById('general-modal');
            Modal?.classList.add(nameModal.start);
            const modalOpen = document.getElementById(nameModal.idModal);
            if (modalOpen) {
                if (nameModal.idModal === 'modalSearch' && Modal) {
                    // Modal.style.transition = 'all ease 2s';
                }
                Modal?.classList.add(nameModal.classOpen);
                modalOpen.classList.add(`${modalOpen.classList.value.split(' ')[0]}-show`);
            }
        }
    }
    const closeModal = (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => {
        const Modal = element.currentTarget.parentElement;
        if (nameModal) {
            const modalOpen = document.querySelector(`#${nameModal.idModal}`);
            console.log(nameModal.idModal);

            console.log('eliminar', `${modalOpen?.classList.value.split(' ')[0]}-show`);
            modalOpen?.classList.remove(`${modalOpen.classList.value.split(' ')[0]}-show`);
            Modal?.classList.remove(nameModal.start);
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
                        onClick={element => setNameModal({ element, classOpen: 'showModalTop', idModal: 'modalSearch', start: 'TL' })}>
                        <Icon path={mdiMagnify} />
                    </button>
                    <span className='simpleSeparator'></span>
                    ssss
                </div>
                <div className='right'>
                    <button className='square-user'
                        onClick={element => setNameModal({ element, classOpen: 'showModal', idModal: 'modalProfile', start: 'TR' })}>
                        <Icon className='icon' path={mdiAccount} />
                    </button>
                </div>
                <div id='portal' className='container__portal'>
                    <div id='general-modal' className='modal'>
                        <div className='full' onClick={closeModal}></div>

                    </div>
                </div>
                {/* <div id='general-modal' className='modal'>
                    <div className='full' onClick={closeModal}></div>
                    <Profile />
                    <Search />
                </div> */}
            </nav>
        </>
    )
}
