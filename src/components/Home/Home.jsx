import React from 'react'
import { HeroSeccion } from './HeroSeccion/HeroSeccion'
import { ButtonHome } from './ButtonHome/ButtonHome'
import { InfoCua } from './InfoCua/InfoCua'

export const Home = () => {
    return (
        <main>
            <HeroSeccion />
            <ButtonHome />
            <InfoCua />
        </main>
    )
}
