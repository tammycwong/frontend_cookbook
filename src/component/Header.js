import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to={`/`}><h1>Gourmet Cannabis Cookbook</h1></Link>
      <br/>
      <span>
        <Link className="button" to="/all-recipes">
          All Recipes
        </Link>
      </span>
      <span>
        <Link className="button" to="/add-recipe">
          Add Recipe
        </Link>
      </span>
      <span>
        <Link className="button" to="/login">
          Login
        </Link>
      </span>
    </div>
  );
}
export default Header;
