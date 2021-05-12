import React from "react";
import {useHistory} from "react-router-dom";
function Home() {
    const history = useHistory()

    function handleClick() {
        history.push("/all-recipes")
    }
    return (
    <div>
    <p>MISSION STATEMENT</p>
    <button onClick={handleClick}>18+</button>
    </div>)
}
export default Home