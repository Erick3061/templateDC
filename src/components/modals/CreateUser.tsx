import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { update_USERS_create } from "../../features/modalsSlice";
import { FormCreateClient } from '../forms/FormCreateClient';


export const CreateUser = () => {
    const nameClass: string = 'container_modal-create';
    const isOpen = useAppSelector((state) => state.modals.USERS_create);
    const dispatch = useAppDispatch();

    return (
        <div id='modal-create-user' className={`modalOne ${isOpen ? 'showModal' : ''}`}>
            <div className='full center-flex'>
                <div className='full' onClick={() => dispatch(update_USERS_create(false))}></div>
                <div id='modalCreateUser' className={`${nameClass} ${isOpen ? `${nameClass}-show` : ''}`}>
                    <div className='head'>
                        <span>
                            <p id='title'>Crear un nuevo { }</p>
                            <p id='subtitle'>Ingresa los datos correspondientes para crear un { }</p>
                        </span>
                    </div>
                    <div className='body'>
                        <FormCreateClient />
                    </div>
                    <div className='footer' style={{ display: 'none' }}></div>
                </div>
            </div>
        </div >
    )
}
