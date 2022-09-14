import { mdiPlus } from '@mdi/js';
import { Icon } from '@mdi/react';
import React from 'react';

interface Props {
    create: () => void;
    title: string;
    subtitle: string;
    txtbtn: string;
}

export const Header = ({ create, subtitle, title, txtbtn }: Props) => {
    return (
        <header className='head'>
            <div>
                <p id='title'>{title}</p>
                <p id='subtitle'>{subtitle}</p>
            </div>
            <button onClick={create}>
                <Icon className='icon' path={mdiPlus} />
                <p>{txtbtn}</p>
            </button>
        </header>
    )
}
