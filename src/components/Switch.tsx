import React from 'react';
interface Props {
    func: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
    text: string;
    value: boolean | undefined;
}
export const Switch = ({ text, func, value }: Props) => {
    return (
        <span className='switch-container'>
            <span className="switch" onClick={() => func(!value)}  >
                {(!value) ? <span className="desplaza"></span> : < span className="desplaza2"></span>}
            </span>
            <p>{text}</p>
        </span>
    )
}