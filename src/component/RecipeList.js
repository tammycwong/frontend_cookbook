import React from "react";

function RecipeList({ recipesArr }) {
  return (
    <div>
      <ul className="recipe">{recipesArr}</ul>
    </div>
  );
}
export default RecipeList;
