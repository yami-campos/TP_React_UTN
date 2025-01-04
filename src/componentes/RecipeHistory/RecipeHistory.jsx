import React, { useState, useEffect } from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipeHistory.css';


const RecipeHistory = ({ setView, recipes, setRecipes }) => {


  // Cargar recetas del localStorage
  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];  //Recupera las recetas guardadas en localStorage (clave: "recipes").
    setRecipes(storedRecipes); // Actualizamos el estado con las recetas guardadas en localStorage
  }, [setRecipes]);



  // Eliminar receta del historial
  const deleteRecipe = (index) => {
    const updatedRecipes = recipes.filter((_, i) => i !== index); // Filtramos la receta a eliminar
    setRecipes(updatedRecipes);  // Actualizamos el estado con las recetas restantes
    localStorage.setItem('recipes', JSON.stringify(updatedRecipes));  // Guardamos el cambio en el localStorage
  };



  return (
    <div className="history-container">
      <h2>Historial de Recetas</h2>

      {recipes.length > 0 ? (
        <ul className="recipe-list">
          {recipes.map((recipe, index) => {
            if (!recipe || !recipe.name) {
              console.error("Receta inválida: ", recipe);
              return null;
            }

            return (
              <RecipeCard
                key={index}
                recipe={recipe}  // Pasamos la receta completa
                onToggle={() => deleteRecipe(index)}
              />
            );
          })}
        </ul>
      ) : (
        <p>No hay recetas guardadas.</p>
      )}

      <button className="button-volver" onClick={() => setView('home')}>Volver al inicio</button>
    
    </div>
  );
};

export default RecipeHistory;
