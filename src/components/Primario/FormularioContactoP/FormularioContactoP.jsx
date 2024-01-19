import React from 'react'
import './FormularioContactoPModule.css'

export const FormularioContactoP = () => {
    return (
        <section className='formulariocontacto'>
            <div className='formulario'>
                <h2>Formulario de Consultas <br /> Nivel Primario</h2>
                <form action="">
                    <div className="form-row">
                        <div className="form-group">
                            <input type="text" id="name" placeholder="Nombre" name="name" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="last" placeholder="Apellido" name="last" required />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <input type="email" id="email" placeholder="Email" name="email" required />
                        </div>
                        <div className="form-group">
                            <input type="text" id="phone" placeholder="Teléfono" name="phone" required />
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea id="consulta" name="consulta" cols="30" rows="10" placeholder="Consulta" required></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enviar" />
                    </div>
                </form>
            </div>

            <div className='ubicacion'>
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
