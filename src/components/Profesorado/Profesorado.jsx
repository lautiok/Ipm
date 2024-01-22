import React from 'react'
import { HeroProfesorado } from './HeroProfesorado/HeroProfesorado'
import { Profesorados } from './Profesorados/Profesorados'
import { FormularioContactoPr } from './FormularioContactoS/FormularioContactoPr'

export const Profesorado = () => {
    return (
        <>
            <HeroProfesorado />
            <Profesorados />
            <FormularioContactoPr />
        </>
    )
}
