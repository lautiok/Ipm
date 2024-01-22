import React from 'react'
import Académico from '../../../assets/info-img/34a1cf56-ccfa-4099-bef9-533e1d4198ee.webp'
import edfs from '../../../assets/info-img/e1fe8dc9-aa1f-4f53-9ac4-e7754e15e2ff.webp'
import ingles from '../../../assets/info-img/maneras-de-practicar-inglés-en-clases-.webp'
import informatica from '../../../assets/info-img/img_9716_JPG.webp'
import edar from '../../../assets/info-img/374fc899-c2cb-4acb-bbc9-c326d7876e9e.webp'
import ted from '../../../assets/info-img/48750ac7-51cb-44d7-a202-2ade5b7c753e.webp'
export const ServiciosEscolaresS = () => {
    return (
        <>
            <div className='serviciosescolares'>
                <h3>Académico</h3>
                <div className='fotomasinfo'>
                    <img src={Académico} alt="Académico" />
                    <p>Formación Integral en Ciencias Humanas,  con amplio conocimiento en: Matemática, Ciencias Naturales, Ciencias Sociales, Literatura, Historia, Arte y Economía. <br /> Acorde al interés del alumno, podrá optar por las siguientes orientaciones: Bachiller en Economía, Ciencias Sociales o Ciencias Naturales. <br /> La especificidad en el abordaje de las diversas disciplinas de estudio, permiten al egresado desarrollarse eficazmente en el ámbito laboral y académico superior. <br /> Es rol del Colegio promover al máximo las capacidades individuales, motivar la voluntad, la autoestima y fomentar la libertad de pensamiento.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Física</h3>
                <div className='fotomasinfo'>
                    <img src={edfs} alt="Educación Física" />
                    <p>La actividad física se orienta a lo de portivo - formativo. <br /> El objetivo principal es generar el hábito y gusto por la actividad física y la práctica de deportes para una salud psicofísica plena, así como al mejoramiento de la calidad de vida. <br /> Se trabajan tácticas y técnicas de los deportes de conjunto y destrezas físicas como flexibilidad, fuerza, resistencia, etc. <br /> En Voley, Atletismo, Hockey y Fútbol se mejoran las técnicas y tácticas de cada deporte. <br /> La actividad se completa con jornadas deportivas y recreativas,  la participación en torneos y competencias intercolegiales.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Inglés</h3>
                <div className='fotomasinfo'>
                    <img src={ingles} alt="Inglés" />
                    <p>Se continúa con la formación en inglés como campo del saber que permite a los adolescentes y jóvenes acceder a otras culturas, y avanzar en la lectura y escritura de otro idioma. <br /> Aplicamos diferentes estrategias destinadas a desarrollar la comprensión y la producción, dando prioridad al valor comunicativo de los elementos del idioma, desarrollando habilidades hasta cumplir con objetivos de dominio del idioma. <br /> El aprendizaje es apoyado por recursos audiovisuales y herramientas  informáticas. </p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Informática</h3>
                <div className='fotomasinfo'>
                    <img src={informatica} alt="Informática" />
                    <p>El área de Informática representa uno de los elementos más significativos para potenciar la enseñanza y desarrollar conocimientos, habilidades, destrezas y capacidades. <br /> Los Proyectos de Informática se realizan en colaboración con otras materias y áreas del aprendizaje. <br /> El objetivo es formar usuarios inteligentes y flexibles, capaces de explotar al máximo las posibilidades que les ofrece la tecnología en todos los campos y de adaptarse con facilidad a los cambios constantes. <br /> Es esencial preparar al alumno para satisfacer las demandas del mercado laboral, de la vida universitaria y de sus necesidades personales como usuarios.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Artística</h3>
                <div className='fotomasinfo'>
                    <img src={edar} alt="Educación Artística" />
                    <p>La Educación Artística genera un proceso en el que se involucra lo emocional, lo afectivo y lo intelectual, utilizando como medios expresivos el arte plástico, la música, la dramatización y actividades periodísticas. <br /> Talleres y Actividades extraprogramáticas: <br /> • Fotografía <br /> • Coro <br /> • Danza y Ritmos. <br /> • Radiodifusión <br /> • Folklore <br /> • Muestras Integradoras de Disciplinas Artísticas</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Torneos Deportivos</h3>
                <div className='fotomasinfo'>
                    <img src={ted} alt="Torneos Deportivos" />
                    <p>• Actividad donde la enseñanza de la educación física se pone en acción al servicio del juego compartido, destacando las habilidades de todos y cada uno, el trabajo en equipo y el reconocimiento a la participación respetuosa y responsable. <br /> • Torneo Interbandos. <br /> • Muestra Anual de Educación Física y Deportes: <br /> Integrando los aprendizajes de las distintas disciplinas, se abren las puertas del colegio a la comunidad para, que en conjunto, compartamos los resultados del proceso educativo.</p>
                </div>
            </div>
        </>
    )
}
