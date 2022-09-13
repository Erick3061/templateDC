import React, { useEffect, useRef, useState } from 'react';
import Icon from '@mdi/react';
import { mdiClose, mdiMenuDown, mdiMenuUp } from '@mdi/js';
import { useCustomForm } from '../hooks/useCustomForm';

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
