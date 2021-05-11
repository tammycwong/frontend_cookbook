import React from "react"
import RecipeCard from "./RecipeCard"

function RecipeList({recipesData}) {
    const recipesArr = recipesData.map((recipe) =>
    { return <RecipeCard key={recipe.id} recipe={recipe}/>}) 

    return (
        <div>
            <ul className="recipe">{recipesArr}</ul>
        </div>
    )
}
export default RecipeList