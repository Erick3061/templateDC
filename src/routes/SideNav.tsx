import { mdiAccountCash, mdiAccountCreditCard, mdiCashRegister, mdiArchiveCheck, mdiPlaylistPlus, mdiClose, mdiKeyboardReturn, mdiSwapHorizontal, mdiStore, mdiAccount, mdiAccountCircle, mdiOrderNumericAscending, mdiPlus, mdiCog, mdiCalendar, mdiCardsHeart, mdiPowerStandby } from '@mdi/js';
import { PropsRoute } from "../interfaces/interfaces";
import Logo from '../assets/logo.png';
import { Icon } from '@mdi/react';
import { DropDown } from '../components/DropDown';
import { NavLink } from 'react-router-dom';

export const SideNav = () => {
    const nameClass: string = 'container__private_sidenav';
    const Genaral: Array<PropsRoute> = [
        { to: '/credit', name: 'Crédito', icon: mdiAccountCreditCard },
        { to: '/voucher', name: 'Vale', icon: mdiAccountCash },
        { to: '/sell', name: 'Venta', icon: mdiCashRegister },
        { to: '/cut-box', name: 'Corte de caja', icon: mdiArchiveCheck },
    ];
    const dropDownOrder: Array<PropsRoute> = [
        { to: '/order/new', name: 'nuevo Pedido', icon: mdiPlaylistPlus },
        { to: '/order/cancels', name: 'Cancelaciónes', icon: mdiClose },
        { to: '/order/rejects', name: 'Devoluciónes', icon: mdiKeyboardReturn },
        { to: '/order/changes', name: 'Cambios', icon: mdiSwapHorizontal },
    ];
    const dropDonwRegister: Array<PropsRoute> = [
        { to: '/providers', name: 'Proveedores', icon: mdiStore },
        { to: '/clients', name: 'Clientes', icon: mdiAccount },
        { to: '/users', name: 'Usuarios', icon: mdiAccount },
    ];
    return (
        <nav className={nameClass}>
            <div className={`${nameClass}-top`}>
                <div className='container-img'>
                    <img className='logo' src={Logo} alt="img" />
                </div>
                <div className='container-user'>
                    <Icon className='employee' path={mdiAccountCircle} />
                    <p id='name'>Erick Andrade Ramos</p>
                    <p id='role'>Empleado</p>
                </div>
                <DropDown key={'Pedido'} name='Pedido' icon={mdiOrderNumericAscending} routes={dropDownOrder} />
                {
                    Genaral.map(R =>
                        <NavLink key={`${R.name}`} className={({ isActive }) => isActive ? 'section-opc-active' : 'section-opc'} to={R.to} >
                            {R.icon && <Icon className='icon' path={R.icon} />}
                            {R.name}
                        </NavLink>
                    )
                }
                <DropDown key={'Register'} name='Registro' icon={mdiPlus} routes={dropDonwRegister} />
                <NavLink key={`Config`} className={({ isActive }) => isActive ? 'section-opc-active' : 'section-opc'} to={'/config'} >
                    <Icon className='icon' path={mdiCog} />
                    Configuración
                </NavLink>

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
    )
}