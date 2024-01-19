import React from 'react'
import './RadioModule.css'

export const Radio = () => {
    return (
        <div className='radio'>

            <h2>Radio en Vivo <span>96.9 FM</span></h2>
            <iframe src="https://www.shockmedia.com.ar/reproductor/reproductores/?idr=Mzgz" width="440" height="132" frameborder="0"></iframe>

        </div>
    )
}
