import React from "react";
import { useHistory } from "react-router-dom";
function Home() {
  let history = useHistory();

  function handleClick() {
    history.push("/all-recipes");
  }
  return (
    <div className="homepage">
      <img className="banner" src="https://www.verilife.com/sites/default/files/uploads/Blog%20Images/Baking%20with%20Cannabis_Blog_800x650.jpg" alt="cover"></img><br/>
          <button onClick={handleClick} className="homebutton">I am Over 18</button>
          <button className="homebutton"><a href="http://dare.org">I am NOT over 18</a></button>
    </div>
  );
}
export default Home;
