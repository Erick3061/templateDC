import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { I_CreateClient } from '../../interfaces/interfaces';
import { Input } from '../Input';
import { color } from '../../colors/colors';
import { Icon } from '@mdi/react';
import { mdiAccountTie, mdiCloudUpload } from '@mdi/js';
import { Select } from '../Select';
import { useAppDispatch } from '../../app/hooks';
import { update_USERS_create } from '../../features/modalsSlice';

export const FormCreateClient = () => {
    const dispatch = useAppDispatch();
    const { register, formState: { errors }, handleSubmit, getValues } = useForm<I_CreateClient>();
    const onSubmit: SubmitHandler<I_CreateClient> = data => {
        console.log(data);
    }

    return (
        <form className='container-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='top'>
                <span className='inputs'>
                    <div className='group'>
                        <Input placeholder='Nombre' register={register} type='text' kys='name' errors={errors} />
                        <Input placeholder='Apellidos' register={register} type='text' kys='lastname' errors={errors} />
                    </div>
                    <div className='group'>
                        <Input placeholder='Número Telefónico' register={register} type='number' kys='phoneNumber' errors={errors} />
                        <Input placeholder='Email' register={register} type='email' kys='email' errors={errors} />
                    </div>
                    <Input placeholder='Dirección' register={register} type='text' kys='address' errors={errors} />

                    <div className='group'>
                        <Input placeholder='Tipo de cliente' register={register} type='text' kys='idType' errors={errors} />
                        <Select />
                    </div>
                </span>
                <div className='container-img'>
                    <span className='borde'>
                        <div className='content'>
                            <Icon className='image' path={mdiAccountTie} />
                            <Icon className='icon' path={mdiCloudUpload} />
                        </div>
                    </span>
                    <span></span>
                </div>
            </div>
            <div className='bottom container-btn'>
                <button className='btn' type='button' onClick={() => dispatch(update_USERS_create(false))}>cancel</button>
                <button className='btn confirm' type='submit' style={{ color: 'white' }}>crear cliente</button>
            </div>
        </form>
    )
}
