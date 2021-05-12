import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>Header</h1>
      <span>
        <Link className="button" to="/all-recipes">
          All Recipes
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
