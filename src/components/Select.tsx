import React, { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMenuDown, mdiMenuUp } from '@mdi/js';
import { useCustomForm } from '../hooks/useCustomForm';
import { DeepRequired, FieldErrorsImpl, UseFormRegister } from 'react-hook-form';
import { color } from '../colors/colors';


export const Select = () => {
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
    const [open, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Array<{ value: number, label: string }>>(data);
    const input: React.LegacyRef<HTMLInputElement> | undefined = useRef(null);
    const { label, onChange } = useCustomForm({ label: '' });



    useEffect(() => {
        if (label === '') setFilter(data);
        setFilter(() => data.filter(el => el.label.toLowerCase().includes(label)));
    }, [label]);

    return (
        <div className='container-select'>
            <input
                ref={input}
                type='search'
                value={label}
                onChange={({ currentTarget }) => onChange(currentTarget.value, 'label')}
                placeholder='Seleccione el tipo'
                onFocus={() => {
                    if (label !== '') setFilter(data.filter(e => e.label !== label));
                    setOpen(true);
                }}
            />
            <ul className={open ? 'show' : ''}>
                <p>presiona <b>ESC</b> para salir</p>
                {
                    filter.map(el => <li
                        key={`${el.value}-${el.label}`}
                        onClick={() => { setOpen(false); onChange(el.label, 'label'); }}
                    >
                        {el.label}
                    </li>)
                }
            </ul>
            {
                label !== '' && <button type='button' onClick={() => onChange('', 'label')}>
                    <Icon className='icon-delete' path={mdiClose} />
                </button>
            }
            <button type='button' onClick={() => { (!open) ? input.current?.focus() : setOpen(false) }}>
                <Icon className='icon' path={(!open) ? mdiMenuDown : mdiMenuUp} />
            </button>
        </div >
    )
}



interface Props<T, K extends keyof T> {
    type: React.HTMLInputTypeAttribute | undefined;
    register: UseFormRegister<any>;
    errors: FieldErrorsImpl<DeepRequired<T>>;
    kys: K;
    placeholder: string;
}

export const SelectInput = <T, K extends keyof T>({ type, register, errors, kys, placeholder }: Props<T, K>) => {
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
    const [open, setOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Array<{ value: number, label: string }>>(data);
    const input: React.LegacyRef<HTMLInputElement> | undefined = useRef(null);
    const { label, onChange } = useCustomForm({ label: '' });

    return (
        <div className={`container-select`}>
            <input
                autoComplete='off'
                type={type}
                placeholder={placeholder}
                style={errors[kys] && { border: `1px solid ${color.colorError}` }}
                {...register(String(kys), { required: true, value: label })}
                onChange={({ currentTarget }) => onChange(currentTarget.value, 'label')}
                onFocus={() => {
                    if (label !== '') setFilter(data.filter(e => e.label !== label));
                    setOpen(true);
                }}
            />
            <p className='error'>{errors[kys] && `${[kys]} is required`}</p>
            <ul className={open ? 'show' : ''}>
                <p>presiona <b>ESC</b> para salir</p>
                {
                    filter.map(el => <li
                        key={`${el.value}-${el.label}`}
                        onClick={() => { setOpen(false); onChange(el.label, 'label'); }}
                    >
                        {el.label}
                    </li>)
                }
            </ul>
            {
                label !== '' && <button type='button' onClick={() => onChange('', 'label')}>
                    <Icon className='icon-delete' path={mdiClose} />
                </button>
            }
            <button type='button' onClick={() => { (!open) ? input.current?.focus() : setOpen(false) }}>
                <Icon className='icon' path={(!open) ? mdiMenuDown : mdiMenuUp} />
            </button>
        </div>
    )
}