import React from 'react';
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { Path } from 'react-router-dom';
import { color } from '../colors/colors';

interface Props<T, K extends keyof T> {
    type: React.HTMLInputTypeAttribute | undefined;
    register: UseFormRegister<any>;
    errors: FieldErrorsImpl<DeepRequired<T>>;
    kys: K;
    placeholder: string;
}

export const Input = <T, K extends keyof T>({ type, register, errors, kys, placeholder }: Props<T, K>) => {
    return (
        <div className='container-input'>
            <input autoComplete='off' style={errors[kys] && { border: `1px solid ${color.colorError}` }} type={type} placeholder={placeholder} {...register(String(kys), { required: true })} />
            <p className='error'>{errors[kys] && `${[kys]} is required`}</p>
        </div>
    )
}
