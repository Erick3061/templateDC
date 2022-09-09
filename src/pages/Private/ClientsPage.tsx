import React, { useState } from 'react';
import { Icon } from '@mdi/react';
import { mdiViewGridOutline, mdiPlus, mdiViewListOutline, mdiMagnify } from '@mdi/js';

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
                    </table>
                    <div className='pagination'>

                    </div>
                </article>
                <footer className='footer'></footer>
            </div>
        </div>
    )
}
