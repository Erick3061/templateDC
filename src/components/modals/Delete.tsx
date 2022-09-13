import React from 'react';
import { Icon } from '@mdi/react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { update_USERS_delete } from "../../features/modalsSlice";
import { mdiClose } from '@mdi/js';

export const Delete = () => {
    const isOpen = useAppSelector((state) => state.modals.USERS_delete);
    const nameClass: string = 'container_modal-delete';
    const dispatch = useAppDispatch();
    return (
        <div id='modal-delete' className={`modalTop ${isOpen ? 'showModalTop' : ''}`}>
            <div className='full center-flex'>
                <div className='full2' onClick={() => dispatch(update_USERS_delete(false))}></div>
                <div id='modalDelete' className={`${nameClass} ${isOpen ? `${nameClass}-show` : ''}`}>
                    <Icon className='icon' path={mdiClose} />
                    <p>¿Estas seguro de eliminar este { }cliente?</p>
                    <div className='container-btn container-btns'>
                        <button className='btn' onClick={() => dispatch(update_USERS_delete(false))}>Cancelar</button>
                        <button className='del'>Elimnar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
