import React from 'react'
import Académico from '../../../assets/info-img/una-niña-en-un-aula.webp'
import edfs from '../../../assets/info-img/ee5eb859-d492-45ec-ada5-65cb3270b6b5.webp'
import ingles from '../../../assets/info-img/maneras-de-practicar-inglés-en-clases-.webp'
import informatica from '../../../assets/info-img/img_9716_JPG.webp'
import edar from '../../../assets/info-img/374fc899-c2cb-4acb-bbc9-c326d7876e9e.webp'
import ted from '../../../assets/info-img/48750ac7-51cb-44d7-a202-2ade5b7c753e.webp'
export const ServiciosEscolaresP = () => {
    return (
        <>
            <div className='serviciosescolares'>
                <h3>Académico</h3>
                <div className='fotomasinfo'>
                    <img src={Académico} alt="Académico" />
                    <p>• Lengua: es la puerta de acceso a saberes y conocimientos formalizados, la expresión de conocimientos, sentimientos,  emociones y deseos. <br /> • La Matemática contribuye a la construcción del juicio crítico, desarrolla la habilidad para plantear y resolver problemas y estrategias <br /> • Las Cs. Sociales y Naturales brindan el conocimiento y descubrimiento del mundo. <br /> • Proyecto Institucional Anual: Integrando los aprendizajes de las distintas disciplinas, se abren las puertas del colegio a la comunidad para, que en conjunto, compartamos el proceso educativo.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Educación Física</h3>
                <div className='fotomasinfo'>
                    <img src={edfs} alt="Educación Física" />
                    <p>Se incorporan conceptos de atletismo, comenzado el  trabajo de cualidades como la resistencia, la flexibilidad, la fuerza y la velocidad. <br /> Las diferentes actividades deportivas se convierten en prácticas sistemáticas: Atletismo, Fútbol, Hockey y Voley. Se incorporan los fundamentos desde el juego para incentivar luego las destrezas de conjunto. <br /> Los deportes en equipo favorecen experiencias en las que aparece el ejercicio de los valores y las relaciones sociales que constituyen una búsqueda constante en todas las áreas del Colegio.</p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Inglés</h3>
                <div className='fotomasinfo'>
                    <img src={ingles} alt="Inglés" />
                    <p>Aplicamos diferentes estrategias destinadas a desarrollar la comprensión y la producción, dando prioridad al valor comunicativo de los elementos del idioma. <br /> El aprendizaje es apoyado por recursos audiovisuales y herramientas  informáticas. La incorporación de saberes, temáticas y vocabularios están en relación con aquellas que resultan familiares para el alumno según la edad.  <br /> Paulatinamente van creciendo sus habilidades hasta cumplir con objetivos de dominio del idioma. </p>
                </div>
            </div>
            <div className='serviciosescolares'>
                <h3>Informática</h3>
                <div className='fotomasinfo'>
                    <img src={informatica} alt="Informática" />
                    <p>Mediante un acercamiento temprano al mundo de la tecnología, los chicos se van familiarizando con el lenguaje informático, incorporando nuevas habilidades y seguridad en el manejo de la tecnología. <br /> Las aplicaciones más utilizadas serán herramientas para sus producciones escolares, impulsando el uso de Internet como recurso para la investigación. <br /> Paulatinamente, la práctica se intensifica y mediante proyectos en colaboración con otras materias y áreas del aprendizaje asegurando la integración e interacción de la tecnología informática con todos los saberes adquiridos.</p>
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
