import React from 'react';
import "../inicio.css"
import imagen from "../imagenes/titilo-removebg-preview.png"

const Inicio = () => {
    return(
    <div className='inicio container my-5'>
                      
            <div className='fondo p-6'>
            <img className='' src= {imagen} alt="Nombre de la pagina" />
            </div>
            
    </div>
)};

export default Inicio;
