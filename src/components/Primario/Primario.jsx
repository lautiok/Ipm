import React from 'react'
import { HeroPrimario } from './HeroPrimario/HeroPrimario'
import { Primaria } from './Primaria/Primaria'
import { FormularioContactoP } from './FormularioContactoP/FormularioContactoP'


export const Primario = () => {
    return (
        <>
            <HeroPrimario />
            <Primaria />
            <FormularioContactoP />
        </>
    )
}
