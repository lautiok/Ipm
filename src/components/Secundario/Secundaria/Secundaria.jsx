import React from 'react'
import './SecundariaModule.css'
import cdd from '../../../assets/info-img/40d70fd2-4393-466b-9ca7-8ec78ab40222.webp'
import ved from '../../../assets/info-img/73473688-97ae-492c-9d76-cb9ec29fff36.webp'
import actos from '../../../assets/info-img/e4bc65da-b90d-4964-b6c5-aaef8122d879.webp'
import expo from '../../../assets/info-img/547bf369-932d-44f9-881d-b4cc504d07b2.webp'
import torneosyc from '../../../assets/info-img/2da8df43-da02-4455-a524-e50fe100e75b.webp'
import talleres from '../../../assets/info-img/4c7e061a-c096-423a-9057-6f30e5ba7465.webp'
import radio from '../../../assets/info-img/4b6e103e-a893-462f-b525-a2062c331122.webp'
import { ModuloInformativoS } from '../ModuloInformativoS/ModuloInformativoP'
import { ServiciosEscolaresS } from '../ServiciosEscolaresS/ServiciosEscolaresS'



export const Secundaria = () => {
    return (
        <section className='moduloprincipal'>
            <div className='moduloprimario'>
                <ModuloInformativoS />
                <ServiciosEscolaresS />
            </div>
            <div className='modulosecundariopr'>
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
                    <div className='circulos'>
                        <img src={radio} alt="Radio" />
                        <h4>Estación de Radio Online</h4>
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
                        <img src={torneosyc} alt="torneos y competencias" />
                        <h4>Torneos y Competencias</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}
