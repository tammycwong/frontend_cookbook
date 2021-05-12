import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import RecipeList from "./component/RecipeList";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Reviews from "./component/Reviews";

function App() {
  const [recipesData, setRecipesData] = useState([])
  useEffect (()=> {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then(recipesArray => setRecipesData(recipesArray)
      )
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/all-recipes">
            <RecipeList recipesData={recipesData}/>
          </Route>
          <Route exact path="/recipes/:id">
            <Reviews/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
