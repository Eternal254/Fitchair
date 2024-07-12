import React from 'react';
import "../inicio.css"
import imagen from "../imagenes/titilo-removebg-preview.png"

const Inicio = () => (
    <div className='inicio'>
                <img className='img' src= {imagen} alt="Nombre de la pagina" />      
      

            <div className='fondo'>
            <p className='texto'>En FitChair somos un equipo de profesionales dedicados 
                a la innovación y el bienestar. Nuestra misión es mejorar la experiencia de la 
                comunidad gamer mediante la integración de una silla que te permitira saber el estado de tu peso cuántas horas pasas sentado en el escritorio mediante sensores que tendrá incorporado la silla y esto es mediante tecnología avanzada y soluciones de salud.</p>


            </div>
            
    </div>
);

export default Inicio;
