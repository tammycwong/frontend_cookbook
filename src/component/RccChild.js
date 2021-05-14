import React from "react";
function RccChild({ selectedRecipe }) {
  console.log(selectedRecipe)
    if (selectedRecipe[0]){
      return (
        <div>
          <p>Rating:{selectedRecipe[0].rating} </p>
          <p>Comment:{selectedRecipe[0].comment} </p> 
        </div>
      )
    } else return "Nah tho"
}
export default RccChild;