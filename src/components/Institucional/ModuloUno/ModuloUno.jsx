import React from 'react'
import './ModuloUnoModule.css'

export const ModuloUno = () => {
    return (
        <section className='moduloUnoContainer'>
            <div className='moduloUnoInfo'>
                <h2>Instituto Privado de Merlo</h2>
                <h3>Desde 1993, Educando por un Mundo Mejor</h3>
                <p>Nuestro Colegio se manifiesta como una institución laica, respetuosa de todos los credos, garantizando una educación enfocada en transmitir
                    conocimientos sin connotaciones ni interpretaciones religiosas. Fundado en 1993,  ofrecemos un Proyecto Educativo de calidad en todos sus niveles,
                    Nivel Inicial,  EGB - Nivel medio, Polimodal y Terciario. Nuestro Proyecto Educativo Institucional se fundamenta en una concepción humanística de la
                    vida, siendo conscientes de que cada niño y adolescente son personas únicas e irrepetibles.</p>
            </div>
            <div className='videoyoutube'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Wn59EvTnnig?si=a9TyoDC9jgHqLWuu&autoplay=1&modestbranding=1" title="Instituto Privado de Merlo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </section>
    )
}
