import React from 'react'
import './HeaderPrincipalModule.css'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../../assets/logo.svg'

export const HeaderPrincipal = () => {
    return (
        <div className='HeaderPrincipal'>
            <div className='LogoContainer'>
                <Link to="/"><img src={logo} alt="logo" /></Link>
            </div>
            <div className='NavContainer'>
                <nav>
                    <ul>
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/institucional">Institucional</NavLink></li>
                        <li><NavLink to="/jardininfantes">Jardin Infantes</NavLink></li>
                        <li><a href="">Primario</a></li>
                        <li><a href="">Secundario</a></li>
                        <li><a href="">Profesorado</a></li>
                        <li><a href="">Novedades</a></li>
                        <li><NavLink to="/radio">Radio</NavLink></li>
                        <li><a href="">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
