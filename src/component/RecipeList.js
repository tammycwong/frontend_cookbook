import React from "react";

function RecipeList({ recipesArr , onDelete}) {
  return (
    <div>
      <ul className="recipe">{recipesArr}</ul>
    </div>
  );
}
export default RecipeList;
