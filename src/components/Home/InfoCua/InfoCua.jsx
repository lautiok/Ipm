import React from 'react'
import './InfoCuaModule.css'
import { Cuadrados } from '../../Cuadrados/Cuadrados'

export const InfoCua = () => {

    const data = [
        { imagen: 'https://static.wixstatic.com/media/01e9508054f647608053bf337dd57818.jpg/v1/crop/x_712,y_0,w_2832,h_2832/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Ni%C3%B1os%20de%20escuela.jpg', titulo: 'INSCRIPCIÓN 2023', informacion: 'Consultar Vacantes. Todos los niveles. Solicitar entrevista.' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_88a263b89d06465f9118222f5ca35fb4~mv2.jpg/v1/crop/x_415,y_248,w_454,h_456/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ee5eb859-d492-45ec-ada5-65cb3270b6b5.jpg', titulo: 'PROYECTO EDUCATIVOS', informacion: 'Propuesta educativa con continuidad  a todos los niveles educativos', className: 'activate' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_9cd89dddd947418ca6e6eda014ae2173~mv2.jpg/v1/crop/x_129,y_0,w_774,h_774/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/128e2dee-b737-40ed-b3d1-64aad7213713.jpg', titulo: 'DEPORTES y TORNEOS', informacion: 'Educación Física. Atletismo.Hockey, Fútbol, Voley.' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_50bed53e1f9843029067536925484e79~mv2.jpg/v1/crop/x_0,y_226,w_581,h_581/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/OWRT4354_JPG.jpg', titulo: 'INGLES', informacion: 'Enseñanza de Idioma Inglés. Posibilidad de rendir exámenes internacionales', className: 'activate' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_aaa800711c804675a75f25605bf47b24~mv2_d_5184_3456_s_4_2.jpg/v1/crop/x_1739,y_0,w_3445,h_3456/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/IMG_9716_JPG.jpg', titulo: 'INFORMÁTICA', informacion: 'Sala multimedia. Tecnología y comunicación.' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_8d0072a3cb7e459e97858af533a60d9a~mv2.jpg/v1/crop/x_0,y_7,w_553,h_553/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/calesitaipm2.jpg', titulo: ' JUEGOS y CALESITA', informacion: 'Amplio patio de juegos, calesita y mucha diversión para los mas chiquitos', className: 'activate' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_5d6db0cec8054bc5bd8bd6589219353f~mv2.jpg/v1/crop/x_286,y_186,w_652,h_650/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/374fc899-c2cb-4acb-bbc9-c326d7876e9e.jpg', titulo: 'MUESTRAS ANUALES', informacion: 'Expoeducativa. Clases Abiertas. Muestras interactivas. Feria de Ciencias.' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_c3eed40ca3b64ab598d4bff2af36b22b~mv2_d_1600_1600_s_2.jpg/v1/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/6a4f3534-00a7-4088-ae3e-d8574c36a8e8.jpg', titulo: 'TALLERES y ACTIVIDADES', informacion: 'Huerta Orgánica. Arte. Danza. Coro y grupo vocal instrumental.', className: 'activate' },
        { imagen: 'https://static.wixstatic.com/media/14a69d_a02dd74e9db040b4a353398b67b53d4a~mv2.jpg/v1/crop/x_280,y_0,w_720,h_720/fill/w_106,h_102,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ac4a9dce-3a3e-43f6-9e6b-e0ba5b4aa1bf.jpg', titulo: 'CAMPAMENTOS Y SALIDAS DIDÁCTICAS', informacion: 'Visitas educativas. Campamentos. Actividades al aire libre. ' },



    ];

    return (
        <div className="contenedor-cuadrados">
            {data.map((item, index) => (
                <Cuadrados key={index} {...item} />
            ))}
        </div>
    )
}
