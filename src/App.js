import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./component/Header";
import Navigation from "./component/Navigation";
import MainContent from "./component/MainContent";

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
        <Navigation/>
      </header>
      <MainContent recipesData={recipesData}/>
    </div>
  );
}

export default App;
