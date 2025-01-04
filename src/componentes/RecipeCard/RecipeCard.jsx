import React from 'react';
import './RecipeCard.css';

const RecipeCard = ({ recipe, onToggle }) => {
  if (!recipe) {
    return <div className="error-message">Error: receta no válida</div>;
  }


  return (
    <div className="recipe-card">
      <h3 className="recipe-name">{recipe.name}</h3>
      <ul className="ingredients-list">
        {recipe.ingredients.map((ingredient, index) => (      //Itera sobre la lista recipe.ingredients con map, renderizando cada ingrediente en un <li> con clase ingredient-item.
         
         <li key={index} className="ingredient-item">
            <span className="ingredient-name">{ingredient.name}</span> (Cantidad: {ingredient.quantity})
          </li>
        ))}

      </ul>


      <div className="button-container">
        <button onClick={onToggle} className="delete-button">Eliminar</button>
      </div>
    </div>
  );
};

export default RecipeCard;

