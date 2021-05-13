import React from "react";
import { useHistory } from "react-router-dom";
function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/all-recipes");
  }
  return (
    <div>
      <p>MISSION STATEMENT</p>
      <img className="banner" src="https://www.verilife.com/sites/default/files/uploads/Blog%20Images/Baking%20with%20Cannabis_Blog_800x650.jpg" alt="cover"></img>
      <button onClick={handleClick}>18+</button>
    </div>
  );
}
export default Home;
