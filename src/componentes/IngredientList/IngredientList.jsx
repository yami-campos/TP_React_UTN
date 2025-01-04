import React from "react";
import { FaCarrot, FaAppleAlt, FaDrumstickBite } from "react-icons/fa";
import "./IngredientList.css";

const categories = [             //datos estáticos.
  {
    name: "Proteínas",
    icon: <FaDrumstickBite />,
    ingredients: ["Pollo", "Carne", "Huevo"]
  },
  {
    name: "Carbohidratos",
    icon: <FaAppleAlt />,
    ingredients: ["Arroz", "Papa", "Legumbres"]
  },
  {
    name: "Vegetales",
    icon: <FaCarrot />,
    ingredients: ["Zanahoria", "Lechuga", "Brocoli"]
  }
];



function IngredientList({ onIngredientSelect }) {          
  const handleDragStart = (event, ingredient) => {             //evento OnDragStart
    event.dataTransfer.setData("ingredient", ingredient);       //Almacena el ingrediente en el objeto de transferencia de datos para permitir que sea arrastrado.
  }; 

  const handleClick = (ingredient) => {
    // Llama la función onIngredientSelect cuando el ingrediente se hace clic
    onIngredientSelect(ingredient);
  };



  return (
    <div className="ingredient-list">

      {categories.map((category, index) => (

        <div 
        key={index} className="category-card">
          
          <div className="category-header">
            <div className="category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
          </div>

          <div className="ingredient-buttons">
            {category.ingredients.map((ingredient, idx) => (

              <button
                key={idx}
                className="ingredient-button"
                draggable                //Arrastre de botón.
                onDragStart={(e) => handleDragStart(e, ingredient)}      
                onClick={() => handleClick(ingredient)} 
              >
                {ingredient}
              </button>


            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IngredientList;
