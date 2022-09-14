import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { I_CreateClient } from '../../interfaces/interfaces';
import { Input } from '../Input';
import { Icon } from '@mdi/react';
import { mdiAccountTie, mdiCloudUpload } from '@mdi/js';
import { SelectInput } from '../Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { update_USERS_create } from '../../features/modalsSlice';



export const FormCreateClient = () => {
    const isOpen = useAppSelector((state) => state.modals.USERS_create);
    const dispatch = useAppDispatch();

    const { register, formState: { errors }, handleSubmit, setValue, clearErrors, setError, reset, setFocus } = useForm<I_CreateClient>({
        defaultValues: {
            address: '',
            email: '',
            idType: 0,
            lastname: '',
            name: '',
            phoneNumber: ''
        }
    });

    const onSubmit: SubmitHandler<I_CreateClient> = data => {
        console.log(data);
    }
    const data = [
        { value: 1, label: 'Mora' },
        { value: 2, label: 'Naranja' },
        { value: 3, label: 'Níspero' },
        { value: 4, label: 'Pera' },
        { value: 5, label: 'Piña' },
        { value: 6, label: 'Plátano' },
        { value: 7, label: 'Pomelo' },
        { value: 8, label: 'Sandía' },
        { value: 9, label: 'Guanabana' },
        { value: 10, label: 'Uvas' },
    ]

    return (
        <form className='container-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='top'>
                <span className='inputs'>
                    <div className='group'>
                        <Input placeholder='Nombre' register={register} type='text' kys='name' errors={errors} options={{ required: { value: true, message: 'Nombre es requerido' } }} />
                        <Input placeholder='Apellidos' register={register} type='text' kys='lastname' errors={errors} options={{ required: { value: true, message: 'Apellidos es requerido' } }} />
                    </div>
                    <div className='group'>
                        <Input placeholder='Número Telefónico' register={register} type='number' kys='phoneNumber' errors={errors}
                            options={{
                                required: { value: true, message: 'Número Telefónico es requerido' },
                                minLength: { value: 10, message: 'Número Telefónico invalido' },
                                maxLength: { value: 10, message: 'Número Telefónico invalido' }
                            }}
                        />
                        <Input placeholder='Email' register={register} type='email' kys='email' errors={errors} />
                    </div>
                    <Input placeholder='Dirección' register={register} type='text' kys='address' errors={errors} />

                    <div className='group'>
                        <SelectInput
                            isOpen={isOpen}
                            setError={setError}
                            clearErrors={clearErrors}
                            setValue={setValue}
                            placeholder='Selecciona'
                            register={register}
                            type='search'
                            kys='idType'
                            errors={errors}
                            data={data}
                            options={{
                                required: { value: true, message: 'Tipo requerido' },
                                valueAsNumber: true
                            }}
                        />
                    </div>
                </span>
                <div className='container-img'>
                    <span className='borde'>
                        <div className='content'>
                            <Icon className='image' path={mdiAccountTie} />
                            <Icon className='icon' path={mdiCloudUpload} />
                        </div>
                    </span>
                    <span>
                        algo
                    </span>
                </div>
            </div>
            <div className='bottom container-btn'>
                <button className='btn' type='button' onClick={() => {
                    dispatch(update_USERS_create(false))
                    reset();
                }}>cancel</button>
                <button className='btn confirm' type='submit' style={{ color: 'white' }}>crear cliente</button>
            </div>
        </form>
    )
}
