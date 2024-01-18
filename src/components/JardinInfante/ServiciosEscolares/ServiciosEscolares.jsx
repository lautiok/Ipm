import React from 'react'
import enseñanza from '../../../assets/info-img/niñosdeescuela.webp'
import edfs from '../../../assets/info-img/educacionfisica.webp'
import edar from '../../../assets/info-img/eduartistica.webp'
import eddg from '../../../assets/info-img/niño-tecnología.webp'
export const ServiciosEscolares = () => {
    return (
        <>
            <div className='serviciosescolares'>
                <h3>Enseñanza Curricular</h3>
                <div className='fotomasinfo'>
                    <img src={enseñanza} alt="Enseñanza Curricular" />
                    <p>Abarca los primeros contenidos para el estudio de las Matemáticas, Lengua, Ciencias Sociales y Naturales. <br /> El juego, los cuentos, las actividades, se convierten en las etapas previas a la lectura, la escritura y el cálculo. <br /> La Biblioteca del Jardín nos permite desarrollar actividades que incentivan el aprendizaje y desarrollan la creatividad e imaginación. <br /> Obras de Títeres, Lectura de Cuentos, Taller Literario.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Física</h3>
                <div className='fotomasinfo'>
                    <img src={edfs} alt="Educación Física" />
                    <p>En Educación Física se realizan ejercicios al aire libre para favorecer el desarrollo muscular, la elasticidad y la coordinación de movimientos. <br /> Esta etapa temprana de la formación física fijará el primer basamento para la futura iniciación deportiva.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Artística</h3>
                <div className='fotomasinfo'>
                    <img src={edar} alt="Educación Artística" />
                    <p>Toda actividad artística: Música, Plástica, Teatro, Expresión Corporal, involucra lo emocional, lo afectivo y lo intelectual que se canaliza en medios expresivos que el niño traslada al plano gráfico y al nivel concreto. <br />Aprender a cantar, a disfrutar de la música, reconocer y jugar con distintos ritmos son actividades para educar el oído e inducir el valor estético.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Digital</h3>
                <div className='fotomasinfo'>
                    <img src={eddg} alt="Educación Digital" />
                    <p>Mediante un acercamiento temprano al mundo de la tecnología, los niños se van familiarizando con el lenguaje informático. <br /> Utilizando programas especialmente adaptados a su edad, los niños van incorporando nuevas habilidades y seguridad en el manejo de la tecnología.</p>
                </div>
            </div>
        </>
    )
}
