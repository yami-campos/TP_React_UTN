import React from 'react';
import './Home.css';

const Home = ({ setView }) => {
    return (
        <div id="home" className="home-container">
            <h1>Recetas</h1>
            <p>Crea tus recetas personalizadas</p>
            <div className="button-container">
                <button className="button-home" onClick={() => setView("create-recipe")}>Agregar receta</button>
                <button className="button-home" onClick={() => setView("recipe-history")}>Ver receta</button>
            </div>
        </div>
    );
};

export default Home;
