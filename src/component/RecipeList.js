import React, {useState} from "react";

function RecipeList({ recipesArr , onDelete}) {
  const [reviewId2, setReviewId2]= useState()
  
  return (
    <div>
      <ul className="recipe">{recipesArr}</ul>
    </div>
  );
}
export default RecipeList;
