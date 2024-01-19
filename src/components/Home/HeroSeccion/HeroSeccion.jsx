import React from 'react'
import './HeroSeccionModule.css'
import { Link } from 'react-router-dom'
export const HeroSeccion = () => {
    return (
        <section className='HeroSeccionContainer'>
            <div className='HeroSeccioninfo'>
                <h1>INSTITUTO PRIVADO DE MERLO</h1>
                <h2>Desde 1993, Educando <br /> para un Mundo Mejor</h2>
                <Link to="/institucional"><a className='button'>Ver Más</a></Link>
            </div>
        </section>
    )
}
