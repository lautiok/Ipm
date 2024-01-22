import React from 'react'
import './ContactModule.css'
import { Link } from 'react-router-dom'

export const Contact = () => {
    return (
        <section className='formulariocontactoc'>
            <div className='formularioc'>
                <div className='ulc'>
                    <h2>Formulario de Consultas :</h2>
                    <ul className='ulc-contact'>
                        <li><Link to='/formulario/nivelinicial'><a>Jardin</a></Link></li>
                        <li><Link to='/formulario/nivelprimario'><a>Primaria</a></Link></li>
                        <li><Link to='/formulario/nivelsecundario'><a>Secundaria</a></Link></li>
                        <li><Link to='/formulario/nivelterciario'><a>Profesorado</a></Link></li>
                    </ul>
                </div>
            </div>

            <div className='ubicacionc'>
                <h3>Ubicación y Contacto</h3>
                <p>Deán Funes 2225, Merlo | Buenos Aires, Argentina  <br /> Te. (0220) 489-0440</p>
                <iframe
                    title="Mapa Google"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.1289222065137!2d-58.76889479263901!3d-34.679157537504246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc95308cd67c75%3A0x67d7659b297bf0e7!2sInstituto%20Privado%20de%20Merlo!5e0!3m2!1ses-419!2sar!4v1705618167818!5m2!1ses-419!2sar"
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    )
}
