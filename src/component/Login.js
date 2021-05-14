import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/users?username=${username}`)
      .then((r) => r.json())
      .then((users) => console.log(users));
  }

  return (
    <div className="login">
      <h1>Login:</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username: </label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br/>
        <br/>
        <label htlmlFor="password"> Password: </label>
        <input id="password" type="password"></input>
        <br/>
        <br/>
        <button type="submit" className="reviews">Login</button>
      </form>
    </div>
  );
}

export default Login;
