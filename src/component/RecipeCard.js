import React, {useState} from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe , onDelete}) {
  const [showHide, setShowHide] = useState(false)
  const { id, name, image, ingredient, direction } = recipe;

  function handleShowHide() {
    setShowHide(!showHide)
  }

  function handleDelete() {
      fetch(`http://localhost:9292/recipes/${id}`, {
          method: "DELETE"
      })
        .then((r) =>r.json())
        .then(() => {
            onDelete(id)
      })
  }
    // function handleViewRecipe() {
    //     fetch(`http://localhost:9292/recipes/${id}`, {
    //         method:
    //     })
    // }

  return (
    <div className="card">
      <h1 className="recipe">{name}</h1>
      <img src={image} alt="food-image" /> <br />
      <button className="showdetails" onClick={handleShowHide}>{showHide ? "Hide":"Show"} Info </button>
        {showHide ? 
        <div>
            <h3 className="details">Ingredients:</h3><p> {ingredient}</p>
            <p className="details"><b>Directions:</b> {direction}</p>
        </div>
            : null}
        <br/>
        <div className="flex">
          <Link to={`/recipes/${id}`} className="reviews">View Reviews</Link>
          <button onClick={handleDelete} className="delete">Delete</button>
        </div>
      
    </div>
  );
}
export default RecipeCard;
