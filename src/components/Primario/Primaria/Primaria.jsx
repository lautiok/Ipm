import React from 'react'
import './PrimariaModule.css'
import cdd from '../../../assets/info-img/atp.webp'
import ved from '../../../assets/info-img/6b45fd0c-eda5-464d-be60-a95649c51cd9.webp'
import actos from '../../../assets/info-img/8b520732-3b52-427f-9d29-5eb9730501a1.webp'
import expo from '../../../assets/info-img/547bf369-932d-44f9-881d-b4cc504d07b2.webp'
import biblioteca from '../../../assets/info-img/niño-en-la-biblioteca.webp'
import talleres from '../../../assets/info-img/db877da4-53f4-4cce-a967-d2b6e08c0d3a.webp'
import radio from '../../../assets/info-img/4b6e103e-a893-462f-b525-a2062c331122.webp'
import { ModuloInformativoP } from '../ModuloInformativoP/ModuloInformativoP'
import { ServiciosEscolaresP } from '../ServiciosEscolaresP/ServiciosEscolaresP'


export const Primaria = () => {
    return (
        <section className='moduloprincipal'>
            <div className='moduloprimario'>
                <ModuloInformativoP />
                <ServiciosEscolaresP />
            </div>
            <div className='modulosecundariopr'>
                <h3>Talleres y Actividades</h3>
                <div className='circulos-secundario'>
                    <div className='circulos'>
                        <img src={cdd} alt="Patio de Juegos y Calesita" />
                        <h4>Campo de Deportes</h4>
                    </div>
                    <div className='circulos'>
                        <img src={ved} alt="Visitas Educativas y Campamentos" />
                        <h4>Visitas Educativas y Campamentos</h4>
                    </div>
                    <div className='circulos'>
                        <img src={actos} alt="Actos Escolares y Celebraciones Patrias" />
                        <h4>Actos Escolares y Celebraciones Patrias</h4>
                    </div>
                    <div className='circulos'>
                        <img src={expo} alt="Clases Abiertas Expoeducativa" />
                        <h4>Clases Abiertas Expoeducativa</h4>
                    </div>
                    <div className='circulos'>
                        <img src={biblioteca} alt="Biblioteca" />
                        <h4>Biblioteca</h4>
                    </div>
                    <div className='circulos'>
                        <img src={talleres} alt="Talleres Educativos" />
                        <h4>Talleres Educativos</h4>
                    </div>
                    <div className='circulos'>
                        <img src={radio} alt="Radio" />
                        <h4>Estación de Radio Online</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
