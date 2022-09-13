import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { I_CreateClient } from '../../interfaces/interfaces';
import { Input } from '../Input';
import { color } from '../../colors/colors';

export const FormCreateClient = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm<I_CreateClient>();
    const onSubmit: SubmitHandler<I_CreateClient> = data => {
        console.log(data);
    }

    const options = [
        { value: 'Socio', label: 'Socio' },
        { value: 'Público', label: 'Público' },
    ]

    return (
        <div className='Form'>
            <form className='container-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='group'>
                    <Input margin='marginHorizontal' placeholder='Nombre' register={register} type='text' kys='name' errors={errors} />
                    <Input margin='marginHorizontal' placeholder='Apellidos' register={register} type='text' kys='lastname' errors={errors} />
                </div>
                <div className='group'>
                    <Input placeholder='Número Teleónico' register={register} type='number' kys='phoneNumber' errors={errors} />
                    <Input placeholder='Email' register={register} type='email' kys='email' errors={errors} />
                </div>
                <Input placeholder='Dirección' register={register} type='text' kys='address' errors={errors} />
                <Input placeholder='Tipo de cliente' register={register} type='text' kys='idType' errors={errors} />
                <button className='btn_LogIn' type="submit">inicia sesión</button>
            </form>
            <div className='container-img'></div>

        </div>
    )
}
