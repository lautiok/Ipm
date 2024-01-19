import React from 'react'
import './ButtonHomeModule.css'
import { Link } from 'react-router-dom'
export const ButtonHome = () => {
    return (
        <section className='ButtonHomeContainer'>
            <Link to="/jardininfantes"><a className='button' href="">Jardin</a></Link>
            <Link to="/primario"><a className='button' href="">Primario</a></Link>
            <Link to="/secundario"><a className='button' href="">Secundario</a></Link>
            <Link to="/profesorado"><a className='button' href="">Profesorado</a></Link>
        </section>
    )
}
