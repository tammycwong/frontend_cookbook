import React, {useState} from "react";

function AddRecipe({onAddRecipe}) {
    const[recipeName, setRecipeName] = useState("")
    const[img, setImg] = useState("")
    const [newIngredients, setNewIngredients] = useState("")
    const [newDirections, setNewDirections] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            name: recipeName,
            image: img,
            ingredient: newIngredients,
            direction: newDirections,
        };
        fetch(`http://localhost:9292/recipes`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(formData),
        })
          .then((res) => res.json())
          .then((newRecipe) => {
            onAddRecipe(newRecipe)
          });
      }
                

    return (
        <form onSubmit={handleSubmit} className="login">
            <h1>Add New Recipe:</h1><br/><br/>
            <input onChange={e => setRecipeName(e.target.value)} type="text" placeholder="Recipe Name" value={recipeName}/><br/><br/>
            <input onChange={e => setImg(e.target.value)} type="url" placeholder="image" value={img}/><br/><br/>
            <textarea onChange={e => setNewIngredients(e.target.value)} type="text" placeholder="ingredients" value={newIngredients}></textarea><br/><br/>
            <textarea onChange={e => setNewDirections(e.target.value)} type="text" placeholder="directions" value={newDirections}></textarea><br/>
            <button type="submit" className="reviews">Submit</button>
        </form>
    )
}
export default AddRecipe;