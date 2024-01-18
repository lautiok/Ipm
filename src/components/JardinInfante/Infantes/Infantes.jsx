import React from 'react'
import './InfantesModule.css'
import calecita from '../../../assets/info-img/juegosycalesita.webp'
import campodedeportes from '../../../assets/info-img/campodedeportesjardin.webp'
import colorincolorado from '../../../assets/info-img/bibliotecacc.webp'
import huertaorganica from '../../../assets/info-img/huertaorg.webp'
import visitas from '../../../assets/info-img/visitasedu.webp'
import actos from '../../../assets/info-img/proyectoseducativos.webp'
import { ServiciosEscolares } from '../ServiciosEscolares/ServiciosEscolares'
import { ModuloInformativo } from '../ModuloInformativo/ModuloInformativo'

export const Infantes = () => {
    return (
        <section className='moduloprincipal'>
            <div className='moduloprimario'>
                <ModuloInformativo />
                <ServiciosEscolares />
            </div>
            <div className='modulosecundario'>
                <h3>Talleres y Actividades</h3>
                <div className='circulos-secundario'>
                    <div className='circulos'>
                        <img src={calecita} alt="Patio de Juegos y Calesita" />
                        <h4>Patio de Juegos y Calesita</h4>
                    </div>
                    <div className='circulos'>
                        <img src={campodedeportes} alt="Campo de Deportes" />
                        <h4>Campo de Deportes</h4>
                    </div>
                    <div className='circulos'>
                        <img src={colorincolorado} alt='biblioteca "Colorin Colorado"' />
                        <h4>Biblioteca "Colorín Colorado"</h4>
                    </div>
                    <div className='circulos'>
                        <img src={huertaorganica} alt="huerta orgánica" />
                        <h4>Huerta orgánica</h4>
                    </div>
                    <div className='circulos'>
                        <img src={visitas} alt="visitas educativas" />
                        <h4>visitas educativas</h4>
                    </div>
                    <div className='circulos'>
                        <img src={actos} alt="actos escolares" />
                        <h4>Actos Escolares y Celebraciones Patrias</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
