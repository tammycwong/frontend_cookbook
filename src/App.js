import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import RecipeList from "./component/RecipeList";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Reviews from "./component/Reviews";
import Login from "./component/Login";
import RecipeCard from "./component/RecipeCard";
import AddRecipe from "./component/AddRecipe";

function App() {
  const [recipesData, setRecipesData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipesArray) => setRecipesData(recipesArray));
  }, []);

  // console.log(recipesData);

  const recipesArr = recipesData.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} onDelete={handleDeleteRecipe}/>;
  });

  function handleAddRecipe(newRecipe) {
    const updatedRecipes = [...recipesData, newRecipe]
      setRecipesData(updatedRecipes);
  }
  function handleDeleteRecipe(id) {
    const updatedRecipes = recipesData.filter(recipe =>
      recipe.id !== id)
      setRecipesData(updatedRecipes)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <Header />
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/all-recipes">
            <RecipeList recipesArr={recipesArr} onDelete={handleDeleteRecipe}/>
          </Route>
          <Route exact path="/recipes/:id">
            <Reviews recipesData={recipesData}/>
          </Route>
          <Route exact path="/add-recipe">
            <AddRecipe onAddRecipe={handleAddRecipe}/>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
