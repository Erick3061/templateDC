import React from 'react';
import { useLocation } from 'react-router-dom';

export const OrderPage = () => {
    const nameClass: string = 'container__private_content_page';
    let location = useLocation();
    return (
        <div className={nameClass}>
            <>
                <div>OrderPage</div>
                <div>{JSON.stringify(location, null, 3)}</div>
                <div>{location.pathname}</div>
            </>
        </div>
    )
}
