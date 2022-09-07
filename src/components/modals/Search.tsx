import React from 'react';
interface Props {
    closeModal: (element: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void;
}
export const Search = ({ closeModal }: Props) => {
    return (
        <div id='modal-search' className='modalTop'>
            <div className='full center-flex'>
                <div className='full' onClick={closeModal}></div>
                <div id='modalSearch' className='container_modal-search'>

                </div>
            </div>
        </div>
    )
}
