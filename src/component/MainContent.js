import React from "react"
import RecipeList from "./RecipeList"

function MainContent({recipesData}) {
    return (
        <div>
            <RecipeList recipesData = {recipesData}/>
        </div>
    )
}
export default MainContent