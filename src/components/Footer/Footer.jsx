import React from 'react'
import './FooterModule.css'
import Logo from '../../assets/logo-footer.png'
export const Footer = () => {
    return (
        <footer>
            <div className='p1'>
                <div className='logo'>
                    <a href=""><img src={Logo} alt="" /></a>
                </div>
                <div className='redes'>
                    <a href=""><i class="bi bi-instagram"></i>@institutoprivadodemerlo</a>
                    <a href=""><i class="bi bi-whatsapp"></i>+54 9 11 6609-3186</a>
                </div>
            </div>
            <div className='p2'>
                <p>© 2024. Todos los derechos reservados, desarrollado por <a href="https://www.nahuelguerra.com.ar">Nahuel Guerra</a>. </p>
            </div>

        </footer>
    )
}
