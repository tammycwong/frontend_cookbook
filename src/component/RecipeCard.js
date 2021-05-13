import React, {useState} from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  const [showHide, setShowHide] = useState(false)
  const { id, name, image, ingredient, direction } = recipe;

  function handleShowHide() {
    setShowHide(!showHide)
  }

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="food-image" width="475px" height="350" /> <br />
      <button onClick={handleShowHide}>{showHide ? "Hide":"Show"} Info </button>
        {showHide ? 
        <div>
            <p><b>Ingredients:</b> {ingredient}</p>
            <p><b>Directions:</b> {direction}</p>
        </div>
            : null}
        <br/>
      <Link to={`/recipes/${id}`}>View Reviews</Link>
    </div>
  );
}
export default RecipeCard;
