import React from 'react'
import data from '../../../data/blog.json'
import { CardBlog } from '../CardBlog/CardBlog'

export const Bloger = () => {
    return (

        <>
            <div className='novedades'><h1>Nuestras Ultimas Novedades</h1></div>
            <div className="blog">
                {data.map((entrada) => (
                    <CardBlog
                        key={entrada.id}
                        titulo={entrada.titulo}
                        imagen={entrada.imagen}
                    />
                ))}
            </div>
        </>

    )
}
