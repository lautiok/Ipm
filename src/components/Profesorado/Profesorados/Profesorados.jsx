import React from 'react'
import './ProfesoradosModule.css'
import cdd from '../../../assets/info-img/40d70fd2-4393-466b-9ca7-8ec78ab40222.webp'
import ved from '../../../assets/info-img/73473688-97ae-492c-9d76-cb9ec29fff36.webp'
import talleres from '../../../assets/info-img/4c7e061a-c096-423a-9057-6f30e5ba7465.webp'
import { ModuloInformativoPr } from '../ModuloInformativoPr/ModuloInformativoPr'
import { ServiciosEscolaresPr } from '../ServiciosEscolaresPr/ServiciosEscolaresPr'



export const Profesorados = () => {
    return (
        <section className='moduloprincipal'>
            <div className='moduloprimario'>
                <ModuloInformativoPr />
                <ServiciosEscolaresPr />
            </div>
            <div className='modulosecundariop'>
                <h3>Talleres y Actividades</h3>
                <div className='circulos-secundario'>
                    <div className='circulos'>
                        <img src={cdd} alt="Patio de Juegos y Calesita" />
                        <h4>Campo de Deportes</h4>
                    </div>
                    <div className='circulos'>
                        <img src={talleres} alt="Talleres Educativos" />
                        <h4>Talleres</h4>
                    </div>
                    <div className='circulos'>
                        <img src={ved} alt="Visitas Educativas y Campamentos" />
                        <h4>Visitas Educativas y Campamentos</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
