import React, { useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiViewGridOutline, mdiPlus, mdiViewListOutline, mdiMagnify, mdiDeleteOutline, mdiCardAccountDetailsOutline } from '@mdi/js';
import { color } from '../../colors/colors';

export const ClientsPage = () => {
    const nameClass: string = 'container__private_content_page';
    const [view, setView] = useState<'list' | 'grid'>('list');
    const [type, setType] = useState<'all' | 'clients' | 'public'>('all');
    return (
        <div className={nameClass}>
            <div className={nameClass}>
                <header className='head'>
                    <div>
                        <p id='title'>Clientes</p>
                        <p id='subtitle'>Administra tus clientes</p>
                    </div>
                    <button>
                        <Icon className='icon' path={mdiPlus} />
                        <p>Crear Cliente</p>
                    </button>
                </header>
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
                    <div className='container-search'>
                        <Icon className='icon' path={mdiMagnify} />
                        <input
                            placeholder='Escribe el nombre aqui'
                            type="text"
                        />
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>teléfono</th>
                                <th className='text-center'>Tipo</th>
                                <th className='text-center'>Estado</th>
                                <th className='text-center'>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Erick Andrade Ramos</td>
                                <td>2371071069</td>
                                <td><p className='type' style={{ ['--color' as any]: color.colorInfo }}>Cliente</p></td>
                                <td className='text-center'>activo</td>
                                <td className='actions center'>
                                    <button onClick={() => { }} data-text="Ver">
                                        <Icon className='icon' path={mdiCardAccountDetailsOutline} />
                                    </button>
                                    <button onClick={() => { }} data-text="Eventos">
                                        <Icon className='icon' path={mdiDeleteOutline} />
                                    </button>
                                    <button onClick={() => { }} data-text="Eliminar">
                                        <Icon className='icon' path={mdiDeleteOutline} />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='pagination'>

                    </div>
                </article>
                <footer className='footer'></footer>
            </div>
        </div>
    )
}
