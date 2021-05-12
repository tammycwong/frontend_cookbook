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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username"> Username: </label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
