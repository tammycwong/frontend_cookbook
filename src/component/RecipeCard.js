import React from "react"

function RecipeCard({recipe}) {
    const {name, image, ingredient, direction} = recipe

    return (
    <div>
        <h1>Recipe Name: {name}</h1>
        <img src={image} alt="food-image" width="475px" height="350"/>
        <p>ingredients: {ingredient}</p>
        <p>directions: {direction}</p>
        <h3>reviews:</h3>
    </div>
    )
}
export default RecipeCard