import { mdiAccountCash, mdiAccountCreditCard, mdiCashRegister, mdiArchiveCheck, mdiPlaylistPlus, mdiClose, mdiKeyboardReturn, mdiSwapHorizontal, mdiStore, mdiAccount, mdiAccountCircle, mdiOrderNumericAscending, mdiPlus, mdiCog, mdiCalendar, mdiCardsHeart, mdiPowerStandby, mdiFileAccount } from '@mdi/js';
import { PropsRoute } from "../interfaces/interfaces";
import Logo from '../assets/logo.png';
import { Icon } from '@mdi/react';
import { DropDown } from '../components/DropDown';
import { NavLink } from 'react-router-dom';
import { Nav } from '../components/Nav';

export const SideNav = () => {
    const nameClass: string = 'container__private_sidenav';
    const Genaral: Array<PropsRoute> = [
        { to: '/sell', name: 'Venta', icon: mdiCashRegister },
        { to: '/cut-box', name: 'Corte de caja', icon: mdiArchiveCheck },
    ];
    const dropDownOrder: Array<PropsRoute> = [
        { to: '/order/new', name: 'nuevo Pedido', icon: mdiPlaylistPlus },
        { to: '/order/cancels', name: 'Cancelaciónes', icon: mdiClose },
        { to: '/order/rejects', name: 'Devoluciónes', icon: mdiKeyboardReturn },
        { to: '/order/changes', name: 'Cambios', icon: mdiSwapHorizontal },
    ];
    const dropDownClient: Array<PropsRoute> = [
        { to: '/clients', name: 'Clientes', icon: mdiAccount },
        { to: '/credit', name: 'Crédito', icon: mdiAccountCreditCard },
        { to: '/voucher', name: 'Vale', icon: mdiAccountCash },
    ];
    const dropDonwRegister: Array<PropsRoute> = [
        { to: '/providers', name: 'Proveedores', icon: mdiStore },
        { to: '/users', name: 'Usuarios', icon: mdiAccount },
    ];
    return (
        <>
            <div className='container__private_portal' onClick={element => {
                element.currentTarget.classList.toggle('container__private_portal-show')
                const sidenav = document.querySelector(`.${nameClass}`);
                sidenav?.classList.toggle('showSidenav');
            }}></div>
            <nav className={nameClass}>
                <div className={`${nameClass}-top`}>
                    <div className='container-img'>
                        <img className='logo' src={Logo} alt="img" />
                    </div>
                    <div className='container-user' onClick={element => {
                        console.log(nameClass);
                        //solo ver iconos en el sidenav
                    }}>
                        <Icon className='employee' path={mdiAccountCircle} />
                        <p id='name'>Erick Andrade Ramos</p>
                        <p id='role'>Empleado</p>
                    </div>
                    {Genaral.map(R => <Nav key={`${R.name}`} icon={R.icon} name={R.name} to={R.to} />)}
                    <DropDown key={'Pedido'} name='Pedido' icon={mdiOrderNumericAscending} routes={dropDownOrder} />
                    <DropDown key={'Cliente'} name='Cliente' icon={mdiFileAccount} routes={dropDownClient} />
                    <DropDown key={'Register'} name='Registro' icon={mdiPlus} routes={dropDonwRegister} />
                    <Nav name='Configuración' to='/config' icon={mdiCog} />
                </div>
                <div className={`${nameClass}-bottom`}>
                    <span className="tooltip fade" data-title="Eventos">
                        <Icon className='squareIcon' path={mdiCalendar} />
                    </span>
                    <span className="tooltip fade" data-title="love">
                        <Icon className='squareIcon' path={mdiCardsHeart} />
                    </span>
                    <span className="tooltip fade" data-title="Cerrar sesión" onClick={() => alert('Cerrando sesión')}>
                        <Icon className='squareIcon' path={mdiPowerStandby} />
                    </span>
                </div>
            </nav >
        </>
    )
}