import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const { id, name, image, ingredient, direction } = recipe;
  console.log(recipe);
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="food-image" width="475px" height="350" />
      <p>ingredients: {ingredient}</p>
      <p>directions: {direction}</p>
      <Link to={`/recipes/${id}`}>View Details</Link>
    </div>
  );
}
export default RecipeCard;
