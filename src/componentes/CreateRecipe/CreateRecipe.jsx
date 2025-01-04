import React, { useState, useEffect } from "react";
import '../CreateRecipe/CreateRecipe.css';
import IngredientList from "../IngredientList/IngredientList.jsx";
import RecipeBuilder from "../RecipeBuilder/RecipeBuilder.jsx";
import RecipeSummary from "../RecipeSummary/RecipeSummary.jsx";



const CreateRecipe = ({ setView, saveRecipe }) => {  
  const [recipeName, setRecipeName] = useState("");   
  const [seleccionarIngredientes, setSeleccionarIngredientes] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [totalCalorias, setTotalCalorias] = useState(0);
  const [totalProteinas, setTotalProteinas] = useState(0);
  const [totalGrasas, setTotalGrasas] = useState(0);
  const [totalCarbohidratos, setTotalCarbohidratos] = useState(0);



  // Agregar un ingrediente a la lista
  const addIngredient = (ingredient) => {
    if (ingredient.trim()) {
      setSeleccionarIngredientes([
        ...seleccionarIngredientes,
        {
          name: ingredient,
          quantity: 1,
          calorias: 0,
          proteinas: 0,
          grasas: 0,
          carbohidratos: 0,
        }
      ]);
      setNewIngredient("");
    }
  };



  // Guardar la receta
  const addRecipe = () => {

    if (!recipeName.trim()) {
      alert("Por favor, ingresa un nombre para la receta.");    // Alerta si el nombre de la receta está vacío
      return;
    }

    if (seleccionarIngredientes.length === 0) {
      alert("Por favor, agrega al menos un ingrediente.");        // Verificar que haya al menos un ingrediente
      return;
    }

    const newRecipe = {
      name: recipeName,  // Nombre de la receta
      ingredients: seleccionarIngredientes,  // Ingredientes con cantidades y valores nutricionales
    };

    saveRecipe(newRecipe);  // Llamamos a la función saveRecipe para agregar la receta
    setRecipeName("");  // Limpiamos el nombre de la receta
    setSeleccionarIngredientes([]);  // Limpiamos los ingredientes seleccionados
    setView("recipe-history");  // Redirigir a la vista de historial después de guardar
  };




  // Recalcular los totales nutricionales cada vez que los ingredientes cambian
  useEffect(() => {
    let tempCalorias = 0;                //inicializar en 0.
    let tempProteinas = 0;
    let tempGrasas = 0;
    let tempCarbohidratos = 0;

    seleccionarIngredientes.forEach(ingrediente => {                //recorrer cada ingrediente.
      tempCalorias += ingrediente.calorias * ingrediente.quantity;    //sumamos los valores nutricionales multiplicados por la cantidad.
      tempProteinas += ingrediente.proteinas * ingrediente.quantity;
      tempGrasas += ingrediente.grasas * ingrediente.quantity;
      tempCarbohidratos += ingrediente.carbohidratos * ingrediente.quantity;
    });

   
    setTotalCalorias(tempCalorias);  //almaceno los totales.
    setTotalProteinas(tempProteinas);
    setTotalGrasas(tempGrasas);
    setTotalCarbohidratos(tempCarbohidratos);
  }, [seleccionarIngredientes]); //Ejecuta el cálculo cada vez que cambia la lista de ingredientes.




  // Actualizar los valores nutricionales de un ingrediente
  const onUpdateNutritionalValues = (index, field, value) => {
    const updatedIngredientes = [...seleccionarIngredientes];       //copia de la lista actual
    updatedIngredientes[index][field] = parseFloat(value) || 0;     //Actualiza el campo específico del ingrediente en el índice dado.
    setSeleccionarIngredientes(updatedIngredientes);
  };


  // Agregar ingrediente al hacer clic
  const onIngredientSelect = (ingredient) => {
    setSeleccionarIngredientes(prev => [...prev,
      { name: ingredient, 
        quantity: 1, 
        calorias: 0, 
        proteinas: 0, 
        grasas: 0, 
        carbohidratos: 0 }
    ]);
  };


  return (
    <div className="recipe-container">
      <h2>Agregá tu receta</h2>



      {/* Input para el nombre de la receta */}
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Escribe el nombre de la receta"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
        />
      </div>



      {/* Lista de ingredientes */}
      <IngredientList onIngredientSelect={onIngredientSelect} />


      {/* Input para agregar un ingrediente nuevo */}
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="Escribe un ingrediente"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
        />
        <button className="button-agregar" onClick={() => addIngredient(newIngredient)}>Agregar ingrediente</button>
      </div>


      {/* Constructor de recetas */}
      <RecipeBuilder
        seleccionarIngredientes={seleccionarIngredientes}
        setSeleccionarIngredientes={setSeleccionarIngredientes}
        onAdjustQuantity={(index, amount) => {        {/* Recibe el índice del ingrediente en la lista y la cantidad a ajustar */} 
          const updatedIngredientes = [...seleccionarIngredientes];
          updatedIngredientes[index].quantity += amount;         {/* Ajusta la cantidad del ingrediente en el índice que se especificó */} 
          if (updatedIngredientes[index].quantity <= 0) {        {/* Esto es para eliminar el ingrediente si queda en 0 o menos */} 
            updatedIngredientes.splice(index, 1);
          }
          setSeleccionarIngredientes(updatedIngredientes);
        }}

        
        onRemove={(index) => {
          const updatedIngredientes = seleccionarIngredientes.filter((_, i) => i !== index);
          setSeleccionarIngredientes(updatedIngredientes);
        }}
        onUpdateNutritionalValues={onUpdateNutritionalValues}
      />


      {/* Resumen nutricional */}
      <RecipeSummary
        totalCalorias={totalCalorias}
        totalProteinas={totalProteinas}
        totalGrasas={totalGrasas}
        totalCarbohidratos={totalCarbohidratos}
      />


      <div className="button-container">
        {/* Botón para guardar la receta */}
        <button className="button-guardarReceta" onClick={addRecipe}>Guardar receta</button>

        {/* Volver al inicio */}
        <button className="button-volverAlInicio" onClick={() => setView("home")}>Volver al inicio</button>
      </div>


    </div>
  );
};

export default CreateRecipe;
