import React from 'react';
import display from '../../assets/img/display1.jpg';

const Home = () => {
	console.log("Xavier")
    return (
        <div className="HomeContent">
            <div className="displays">
                <img src={display} alt="display_show"/>
            </div>
            <div className="overall">
                <p>
                    En la siguiente pagina se desarrollan los conceptos relacionados a la materia diseño de sitios web, la cual tiene como objetivo conocer las estructuras esenciales para la construcción de un sitio web con las herramientas necesarias para construir un sitio con una estructura y visualización adecuada.
                </p>

                <h2>
                    Objetivos
                </h2>
                <div className="objectives">
                    <div>
                        <strong>Generales</strong>
                        <p>
                            Poner en practica los conocimientos adquiridos en el estudio de la unidad, el cual se enfoca en el diseño, el uso de editores de codigo y el control de versiones.
                        </p>
                    </div>
                    <div>
                        <strong>Especificos:</strong>
                        <ol>
                            <li>
                                <span>
                                    Manejo de etiquetas HTML
                                </span>
                            </li>
                            <li>
                                <span>
                                    Estilos con CSS
                                </span>
                            </li>
                            <li>
                                <span>
                                    Secciones y atributos
                                </span>
                            </li>
                            <li>
                                <span>
                                    Control de versiones
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="twitter">
                    <a class="twitter-timeline" href="https://twitter.com/UniversidadUNAD?ref_src=twsrc%5Etfw">Tweets by UniversidadUNAD</a> 
                </div>
            </div>
        </div>
    )
}
export default Home;