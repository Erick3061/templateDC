import React, { useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiViewGridOutline, mdiViewListOutline, mdiMagnify, mdiDeleteOutline, mdiAccountDetails, mdiChevronLeft, mdiChevronRight, mdiMenuDown, mdiDotsVertical, mdiCheckboxBlankOutline, mdiCheckboxMarked } from '@mdi/js';
import { color } from '../../colors/colors';
import { hextToRgb, LightenDarkenColor } from '../../functions/functions';
import { Delete } from '../../components/modals/Delete';
import { useAppDispatch } from '../../app/hooks';
import { update_USERS_delete, update_USERS_create } from '../../features/modalsSlice';
import { CreateUser } from '../../components/modals/CreateUser';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import Profile from '../../assets/profile.jpg';

export const ClientsPage = () => {
    const nameClass: string = 'container__private_content_page';
    const [view, setView] = useState<'list' | 'grid'>('list');
    const [type, setType] = useState<'all' | 'clients' | 'public'>('all');
    const [rows, setRows] = useState<number>(15);
    const [openListRows, setOpenListRows] = useState<boolean>(false);

    const clients: Array<{ id: string, name: string, lastname: string, phoneNumber: string, type: number, status: boolean, email: string, address: string }> =
        [
            { id: '1', name: 'Erick', lastname: 'Andrade Ramos', address: 'Av.5 de mayo', email: 'grillo.erick1@gmail.com', phoneNumber: '2371071069', status: true, type: 1 },
            { id: '132', name: 'gggd', lastname: 'nasawqe asqwemdlsasn', address: 'Av.5 de mayo', email: 'gri.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 2 },
            { id: '143343', name: 'mfkfm', lastname: 'nawesa dasd ', address: 'Av.5 de mayo', email: 'ewewe.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 2 },
            { id: '1434', name: 'mdmd', lastname: 'nawesa asmdlsasn', address: 'Av.5 de mayo', email: 'wewegrillo.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 1 },
            { id: '5333453535', name: 'asdsadadk', lastname: 'nawesa asmdlsasn', address: 'Av.5 de mayo', email: 'gwewrillo.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 1 },
            { id: '43346', name: 'Erdsfsd', lastname: 'nadsdssa ', address: 'Av.5 de mayo', email: 'grillo.ericwewek1@gmail.com', phoneNumber: '0000000000', status: true, type: 2 },
            { id: '33447', name: 'Edasdasd', lastname: 'nassda asmdlsasn', address: 'Av.5 de mayo', email: 'grilwewlo.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 1 },
            { id: '144354', name: 'asdck', lastname: 'nadsdssa ', address: 'Av.5 de mayo', email: 'grillo.eriweweck1@gmewewail.com', phoneNumber: '0000000000', status: true, type: 1 },
            { id: '3431', name: 'adsick', lastname: 'nassda asmdlsdsasn', address: 'Av.5 de mayo', email: 'grwqewqeillo.erick1@gmail.com', phoneNumber: '0000000000', status: true, type: 2 },
            { id: '134', name: 'Eadsck', lastname: 'nasasd sdsd', address: 'Av.5 de mayo', email: 'griqweqllo.eriwwewck1@gmail.com', phoneNumber: '0000000000', status: true, type: 1 },
        ];

    const dispatch = useAppDispatch();

    return (
        <div className={nameClass}>
            <Header
                create={() => dispatch(update_USERS_create(true))}
                title='Clientes'
                subtitle='Administra tus clientes'
                txtbtn='Crear Cliente'
            />
            <article className='body'>
                <div className='filter'>
                    <div className='type'>
                        <button
                            onClick={() => setType('all')}
                            className={type === 'all' ? 'active' : ''}
                        >Todos</button>
                        <button
                            onClick={() => setType('clients')}
                            className={type === 'clients' ? 'active' : ''}
                        >Afiliados</button>
                        <button
                            onClick={() => setType('public')}
                            className={type === 'public' ? 'active' : ''}
                        >Publico</button>
                    </div>
                    <div className='view'>
                        <button
                            onClick={() => setView('list')}
                            className={`radiusLeft ${view === 'list' ? 'active' : ''}`}
                        >
                            <Icon path={mdiViewListOutline} />
                        </button>
                        <button
                            onClick={() => setView('grid')}
                            className={`radiusRight ${view === 'grid' ? 'active' : ''}`}
                        >
                            <Icon path={mdiViewGridOutline} />
                        </button>
                    </div>
                </div>
                <div className={`container-data${view === 'grid' ? '-grid' : ''}`}>
                    <div className='container-search'>
                        <Icon className='icon' path={mdiMagnify} />
                        <input
                            placeholder='Escribe el nombre aqui'
                            type="text"
                        />
                    </div>
                    <div className='data'>
                        {
                            (view === 'list')
                                ?
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='check'><input type="checkbox" /></th>
                                            <th>Nombre</th>
                                            <th>Teléfono</th>
                                            <th>Correo</th>
                                            <th className='text-center'>Tipo</th>
                                            <th className='text-center'>Estado</th>
                                            <th className='text-center'>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            clients.map(C =>
                                                <tr key={`${C.id}`}>
                                                    <td className='check'><input type="checkbox" /></td>
                                                    <td>{C.name} {C.lastname}</td>
                                                    <td className='text-center'>{C.phoneNumber}</td>
                                                    <td>{C.email}</td>
                                                    <td>
                                                        <p className='type' style={{ backgroundColor: `rgba(${hextToRgb(C.type === 1 ? color.colorInfo : color.colorQuestion)},0.3)`, color: `${LightenDarkenColor(C.type === 1 ? color.colorInfo : color.colorQuestion, -20)}` }}>
                                                            {C.type === 1 ? 'Cliente' : 'Público'}
                                                        </p>
                                                    </td>
                                                    <td className='text-center'>{C.status ? 'ACTIVO' : 'INACTIVO'}</td>
                                                    <td className='actions center'>
                                                        <button onClick={() => { }} data-text="Detalles">
                                                            <Icon path={mdiAccountDetails} />
                                                        </button>
                                                        <button onClick={() => dispatch(update_USERS_delete(true))} data-text="Eliminar">
                                                            <Icon path={mdiDeleteOutline} />
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                                :
                                <span className='container-grid'>
                                    {
                                        ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ',', '',].map(el =>
                                            <div className='container-card'>
                                                <div className='card select'>
                                                    <div className='top'>
                                                        <p>Administrador</p>
                                                        <Icon path={mdiDotsVertical} />
                                                    </div>
                                                    <div className='center'>
                                                        <div>
                                                            <img src={Profile} alt="Img" />
                                                            <span>
                                                                <p id='name'>Erick Andrade Ramos</p>
                                                                <p id='phoneNumber'>2371071069</p>
                                                                <p id='email'>grillo.erick1@gmail.com</p>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className='bottom'>
                                                        <p> <span>{25}</span> Pedidos</p>
                                                        <Icon className='select' path={mdiCheckboxBlankOutline} />
                                                        <Icon className='select' path={mdiCheckboxMarked} />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </span>
                        }

                    </div>
                    <div className='container-pagination'>
                        <div className={`container__private_portal${openListRows ? '-show' : ''}`} onClick={() => setOpenListRows(false)}></div>
                        <span>
                            <p>Filas por página:</p>
                            <div className='container-pages'>
                                <button className='container-btns' onClick={() => setOpenListRows(true)}>
                                    <input disabled type="text" value={rows} />
                                    <Icon path={mdiMenuDown} />
                                </button>
                                <ul className={openListRows ? 'show' : ''}>
                                    {
                                        [5, 10, 15].map(el => <li key={`${el}`} onClick={() => {
                                            setRows(el)
                                            setOpenListRows(false);
                                        }}> {el} </li>)
                                    }
                                </ul>
                            </div>
                        </span>
                        <p>1-2 de {'276'}</p>
                        <span className='container-arrow'>
                            <Icon path={mdiChevronLeft} />
                            <Icon className='active' path={mdiChevronRight} />
                        </span>
                    </div>
                </div>
            </article>

            <Delete />
            <CreateUser />

            <Footer />
        </div>
    )
}
