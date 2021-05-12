import React from "react";

function RecipeList({ recipesArr, callBack }) {
  return (
    <div>
      <ul className="recipe">{recipesArr}</ul>
    </div>
  );
}
export default RecipeList;
