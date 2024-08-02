import React from 'react';
import "../iniciodos.css";
import imagen from "../imagenes/titilo-removebg-preview.png";
import imagen2 from "../imagenes/img5.png";
import imagen3 from "../imagenes/img6.png";
import imagen4 from "../imagenes/img7.png";
import imagen5 from "../imagenes/img8.png";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importar el CSS del carrusel

const Inicio = () => {
    return (
        <div>
            <div className='div1'>
                <img className='inicio-image' src={imagen} alt="Nombre de la pagina" />
            </div>
            <br />
            <div className='inicio-container'>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    useKeyboardArrows={true}
                    autoPlay={true}
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    className='carousel'
                >
                    <div>
                        <img className='imagen2' src={imagen2} alt="Imagen 2" />
                    </div>
                    <div>
                        <img className='imagen3' src={imagen3} alt="Imagen 3" />
                    </div>
                    <div>
                        <img className='imagen2' src={imagen4} alt="Imagen 4" />
                    </div>
                    <div>
                        <img className='imagen2' src={imagen5} alt="Imagen 5" />
                    </div>
                    {/* Añade más imágenes según sea necesario */}
                </Carousel>
            </div>
        </div>
    );
};

export default Inicio;
