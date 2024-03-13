import React from 'react'
import './BarraContactosModule.css'
import { Link } from 'react-router-dom'


export const BarraContactos = () => {
    return (
        <>
            <div className='BarraContactosContainer'>
                <div className='TelefonoContacto'>
                    <i className="bi bi-telephone"></i>
                    <a href="tel:+5491155555555">+54 9 11 5555-5555</a>
                </div>
                <div className='EmailContacto'>
                    <i className="bi bi-envelope"></i>
                    <a><Link to="/contacto" >Formularios de Contacto</Link></a>
                </div>
            </div>
        </>
    )
}
