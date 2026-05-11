import React, { useState } from "react";
import { signIn, signUp } from "./auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Sign up successful!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleLogin = async () => {
    try {
      const result = await signIn(email, password);
      alert("Login successful!");
      console.log(result);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h1>Cloud Photo Gallery</h1>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
