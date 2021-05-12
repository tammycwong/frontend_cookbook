import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import RecipeList from "./component/RecipeList";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Reviews from "./component/Reviews";
import Login from "./component/Login";
import RecipeCard from "./component/RecipeCard";

function App() {
  const [recipesData, setRecipesData] = useState([]);
  const [testData, setTestData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipesArray) => setRecipesData(recipesArray));
  }, []);

  function callBack(e) {
    setTestData(e);
  }
  console.log(recipesData);

  const recipesArr = recipesData.map((recipe) => {
    return <RecipeCard key={recipe.id} recipe={recipe} callBack={callBack} />;
  });

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
            <RecipeList recipesArr={recipesArr} callBack={callBack} />
          </Route>
          <Route exact path="/recipes/:id">
            <Reviews recipesArr={recipesArr} testData={testData} />
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
