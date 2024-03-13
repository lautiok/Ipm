import React from 'react'

export const CardBlog = ({ imagen, titulo }) => {
    return (
        <div className="card">
            <img src={imagen} alt={titulo} />
            <h2>{titulo}</h2>
        </div>
    )
}
