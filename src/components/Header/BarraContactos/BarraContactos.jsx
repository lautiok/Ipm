import React from 'react'
import './BarraContactosModule.css'

export const BarraContactos = () => {
    return (
        <>
            <div className='BarraContactosContainer'>
                <div className='TelefonoContacto'>
                    <i class="bi bi-telephone"></i>
                    <a href="">0220-489-0440</a>
                </div>
                <div className='EmailContacto'>
                    <i class="bi bi-envelope"></i>
                    <a href="">Formularios de Contacto</a>
                </div>
            </div>
        </>
    )
}
