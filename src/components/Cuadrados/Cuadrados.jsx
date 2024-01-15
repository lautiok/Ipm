import React from 'react';

export const Cuadrados = ({ imagen, titulo, informacion, className }) => {
    return (
        <div className={`cuadrado ${className}`}>
            <img src={imagen} alt="Imagen" className="imagen-redonda" />
            <h3>{titulo}</h3>
            <p>{informacion}</p>
        </div>
    );
};
