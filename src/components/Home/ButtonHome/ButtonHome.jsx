import React from 'react'
import './ButtonHomeModule.css'
import { Link } from 'react-router-dom'
export const ButtonHome = () => {
    return (
        <section className='ButtonHomeContainer'>
            <Link to="/jardininfantes"><a className='button' href="">Jardin</a></Link>
            <a className='button' href="">Primario</a>
            <a className='button' href="">Secundario</a>
            <a className='button' href="">Profesorado</a>
        </section>
    )
}
