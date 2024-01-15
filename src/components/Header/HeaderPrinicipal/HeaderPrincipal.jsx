import React from 'react'
import './HeaderPrincipalModule.css'
import logo from '../../../assets/logo.svg'

export const HeaderPrincipal = () => {
    return (
        <div className='HeaderPrincipal'>
            <div className='LogoContainer'>
                <a href=""><img src={logo} alt="Logo" /></a>
            </div>
            <div className='NavContainer'>
                <nav>
                    <ul>
                        <li><a className='active' href="">Inicio</a></li>
                        <li><a href="">Institucional</a></li>
                        <li><a href="">Jardin Infantes</a></li>
                        <li><a href="">Primario</a></li>
                        <li><a href="">Secundario</a></li>
                        <li><a href="">Profesorado</a></li>
                        <li><a href="">Novedades</a></li>
                        <li><a href="">Radio IPM</a></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
