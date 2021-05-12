import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import RecipeList from "./component/RecipeList";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import Reviews from "./component/Reviews";
import Login from "./component/Login";

function App() {
  const [recipesData, setRecipesData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipesArray) => setRecipesData(recipesArray));
  }, []);

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
            <RecipeList recipesData={recipesData} />
          </Route>
          <Route exact path="/recipes/:id">
            <Reviews />
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
