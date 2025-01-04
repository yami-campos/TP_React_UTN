import React, { useState, useEffect } from 'react';
import Home from './componentes/Home/Home.jsx';
import CreateRecipe from './componentes/CreateRecipe/CreateRecipe.jsx';
import RecipeHistory from './componentes/RecipeHistory/RecipeHistory.jsx';

const App = () => {

  const [view, setView] = useState("home");
  const [recipes, setRecipes] = useState([]);


  // Guardar receta nueva
  const saveRecipe = (newRecipe) => {
    const updatedRecipes = [...recipes, newRecipe]; // Agregar nueva receta al arreglo
    setRecipes(updatedRecipes); // Actualizar el estado de recetas


    // Guardar en el localStorage
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
  };


  // Cargar recetas guardadas en localStorage al inicio
  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
    setRecipes(savedRecipes);  // Actualiza el estado con las recetas cargadas
  }, []);


  return (
    <div className="app-container">
      {view === "home" && <Home setView={setView} />}
      {view === "create-recipe" && <CreateRecipe setView={setView} saveRecipe={saveRecipe} />}
      {view === "recipe-history" && <RecipeHistory setView={setView} recipes={recipes} setRecipes={setRecipes} />}
    </div>
  );
};

export default App;
