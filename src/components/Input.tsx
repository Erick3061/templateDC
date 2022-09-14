import React from 'react';
import { DeepRequired, FieldErrorsImpl, UseFormRegister, RegisterOptions } from 'react-hook-form';
import { color } from '../colors/colors';

interface Props<T, K extends keyof T> {
    type: React.HTMLInputTypeAttribute | undefined;
    register: UseFormRegister<any>;
    options?: RegisterOptions;
    errors: FieldErrorsImpl<DeepRequired<T>>;
    kys: K;
    placeholder: string;
}

export const Input = <T, K extends keyof T>({ type, register, errors, kys, placeholder, options }: Props<T, K>) => {
    return (
        <div className={`container-input`}>
            <input style={errors[kys] && { border: `1px solid ${color.colorError}` }} type={type} placeholder={placeholder} {...register(String(kys), { ...options })} />
            <p className='error'>{errors[kys] && `${errors[kys]?.message}`}</p>
        </div>
    )
}
