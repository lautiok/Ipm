import React from 'react'
import { ModuloUno } from './ModuloUno/ModuloUno'
import { ModuloDos } from './MuduloDos/ModuloDos'
import './institucionalModulo.css'

export const Institucional = () => {
    return (
        <main className='institucionalContainer'>
            <ModuloUno />
            <ModuloDos />
        </main>
    )
}
