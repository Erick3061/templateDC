import React, { useEffect, useState } from 'react';
import { Icon } from "@mdi/react";
import { mdiAccount, mdiMenu } from '@mdi/js';
import { mdiMagnify } from '@mdi/js';
import { Profile } from '../components/modals/Profile';
import { Search } from '../components/modals/Search';

export const TopNav = () => {
    const [openModal, setopenModal] = useState<{
        search: boolean,
        profile: boolean
    }>({ profile: false, search: false });

    useEffect(() => {
        console.log(openModal);
    }, [openModal]);

    const nameClass: string = 'container__private_content_topnav';
    return (
        <nav className={nameClass}>
            <div className='left'>
                <button className='square picon'
                    onClick={() => setopenModal({ ...openModal, search: !openModal.search })}>
                    <Icon path={mdiMagnify} />
                </button>
                <span className='simpleSeparator'></span>
                ssss
            </div>
            <div className='right'>
                <button className='square-user'
                    onClick={() => setopenModal({ ...openModal, profile: !openModal.profile })}>
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
            <Profile openModal={openModal} setopenModal={setopenModal} />
            <Search openModal={openModal} setopenModal={setopenModal} />
        </nav>
    )
}
