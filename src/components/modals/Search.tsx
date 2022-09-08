import { Icon } from '@mdi/react';
import React, { useRef, useState } from 'react';
import { PropsModal } from '../../interfaces/IModal';
import { mdiMagnify } from '@mdi/js';
export const Search = ({ openModal, setopenModal }: PropsModal) => {
    const { search } = openModal;
    const [filter, setFilter] = useState<string>('id');
    const modal: React.LegacyRef<HTMLDivElement> | undefined = useRef(null);
    if (search === true) {
        document.addEventListener('keydown', (event) => {
            if (event.keyCode === 27 && modal.current) {
                if (modal.current.className.includes(`${modal.current.className.split(' ')[0]}-show`)) {
                    setopenModal({ ...openModal, search: false });
                }
            }
        }, false);
    }

    return (
        <div id='modal-search' className={`modalTop ${search ? 'showModalTop' : ''}`}>
            <div className='full center-flex'>
                <div className='full' onClick={() => setopenModal({ ...openModal, search: false })}></div>
                <div ref={modal} id='modalSearch' className={`container_modal-search ${search ? 'container_modal-search-show' : ''}`}>
                    <div className='filter'>
                        <div className='opcs'>
                            <button className={filter === 'id' ? 'active' : ''} onClick={() => setFilter('id')}>id</button>
                            <button className={filter === 'clients' ? 'active' : ''} onClick={() => setFilter('clients')}>clientes</button>
                            {/* <button className={filter === 'vouchers' ? 'active' : ''} onClick={() => setFilter('vouchers')}>vales</button> */}
                        </div>
                        <p>esc</p>
                    </div>
                    <div className='search'>
                        <Icon className='icon' path={mdiMagnify} />
                        <input type="text" placeholder='Seleccione aqui para buscar' />
                    </div>
                    <div className='content'>

                    </div>
                </div>
            </div>
        </div>
    )
}
