import React, { useState, useEffect } from 'react';
import './RecipeBuilder.css';


const RecipeBuilder = ({
  seleccionarIngredientes,
  setSeleccionarIngredientes,
  onRemove,
  onAdjustQuantity,
  onUpdateNutritionalValues,
}) => {
  const [valoresNutricionales, setValoresNutricionales] = useState({});



  // Manejar el cambio de los valores nutricionales
  const manejarCambioNutricional = (index, e) => {     //Actualiza el valor nutricional de un ingrediente en el índice
    const { name, value } = e.target;
    const valorNumerico = Math.max(0, parseInt(value) || 0);        //evitamos valores negativos.

    onUpdateNutritionalValues(index, name, valorNumerico);

    setValoresNutricionales((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [name]: valorNumerico
      }
    }));
  };



  // Manejar el drop de un ingrediente
  const handleDrop = (e) => {
    e.preventDefault(); 
    const ingrediente = e.dataTransfer.getData('ingredient');     //Recupera el nombre del ingrediente arrastrado desde dataTransfer.
    console.log('Dropped ingredient:', ingrediente); // Ver el ingrediente arrastrado


    if (ingrediente && !seleccionarIngredientes.some((item) => item.name === ingrediente)) {
      setSeleccionarIngredientes((prev) => [
        ...prev,
        { name: ingrediente, quantity: 1 } // Agregar el ingrediente con cantidad inicial 1
      ]);
    }
  };


  // Prevenir el comportamiento por defecto para que acepte el drop
  const handleDragOver = (e) => {
    e.preventDefault();
  };


  // Función para eliminar un ingrediente de la receta
  const handleRemove = (index) => {
    onRemove(index);
  };


  // Función para ajustar la cantidad de un ingrediente
  const handleAdjustQuantity = (index, amount) => {
    onAdjustQuantity(index, amount);
  };



  return (
    <div className="recipe-builder">
      <h3>Ingredientes Seleccionados</h3>
      <div
        className="selected-panel"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        
        {seleccionarIngredientes.length > 0 ? (
          <ul>
            {seleccionarIngredientes.map((item, index) => (
              <li key={index} className="selected-item">
                <span>{item.name}</span>

                <div className="quantity-controls">
                  <button className="btn" onClick={() => handleAdjustQuantity(index, -1)}> - </button>
                  <span>{item.quantity}</span>
                  <button className="btn" onClick={() => handleAdjustQuantity(index, 1)}> + </button>
                </div>

              
                <button onClick={() => handleRemove(index)} className="remove-button"> X </button>


                <div className="nutritional-values">
                  <h4>Valores Nutricionales</h4>
                  <div className="input-row">
                    <div>
                      <label>Calorías:</label>
                      <input
                        type="number"
                        name="calorias"
                        value={valoresNutricionales[index]?.calorias || ''}
                        onChange={(e) => manejarCambioNutricional(index, e)}
                        placeholder="0"
                      />
                    </div>


                    <div>
                      <label>Proteínas:</label>
                      <input
                        type="number"
                        name="proteinas"
                        value={valoresNutricionales[index]?.proteinas || ''}
                        onChange={(e) => manejarCambioNutricional(index, e)}
                        placeholder="0"
                      />
                    </div>
                  </div>

                
                  <div className="input-row">
                    <div>
                      <label>Grasas:</label>
                      <input
                        type="number"
                        name="grasas"
                        value={valoresNutricionales[index]?.grasas || ''}
                        onChange={(e) => manejarCambioNutricional(index, e)}
                        placeholder="0"
                      />
                    </div>
                    
                    <div>
                      <label>Carbohidratos:</label>
                      <input
                        type="number"
                        name="carbohidratos"
                        value={valoresNutricionales[index]?.carbohidratos || ''}
                        onChange={(e) => manejarCambioNutricional(index, e)}
                        placeholder="0"
                      />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Arrastra ingredientes aquí o agréguelos manualmente.</p>
        )}
      </div>
    </div>
  );
};

export default RecipeBuilder;
