import React from 'react';
import './RecipeSummary.css';

const RecipeSummary = ({ totalCalorias = 0, totalProteinas = 0, totalGrasas = 0, totalCarbohidratos = 0 }) => {
  return (
    <div className="resumen-receta">
      <h3>Resumen Nutricional</h3>

      <div className="totales">
        <h4>Totales Nutricionales de la Receta</h4>
        <p>Calorías: {totalCalorias} kcal</p>
        <p>Proteínas: {totalProteinas} g</p>
        <p>Grasas: {totalGrasas} g</p>
        <p>Carbohidratos: {totalCarbohidratos} g</p>
      </div>
    </div>
  );
};

export default RecipeSummary;
