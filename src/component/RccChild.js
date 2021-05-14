import React from "react";
function RccChild({ selectedRecipe }) {
  console.log(selectedRecipe)
    if (selectedRecipe[0]){
      return (
        <div className="commentpage">
          <p>Rating: {selectedRecipe[0].rating} </p>
          <p>Comment: {selectedRecipe[0].comment} </p> 
        </div>
      )
    } else return "Be the first to review this recipe!"
}
export default RccChild;