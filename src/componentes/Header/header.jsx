import React from 'react';
import './header.css';

const Header = () => {
    return (
        <>
            <div>
                <header id="inicio">
                    <div className="contenedor">
                        <nav className="menu">
                            <a href="#inicio">Inicio</a> 
                            <a href="#acercade">Acerca de</a> 
                            <a href="#createRecipe">Crear Receta</a> 
                            <a href="#contacto">Contacto</a>
                        </nav>

                        <div className="contenido-header">
                            <h1 className="titulo-header">Cocinando tu Receta</h1>
                            <span className="linea-header"></span>
                            <h2 className="texto-header">La cocina en tus manos<span className="desaparecer"></span></h2>
                            <a href="#home" className="action-header">Crear Receta</a>
                        </div>
                    </div>
                </header>
            </div>
        </>
    );
};

export default Header;
