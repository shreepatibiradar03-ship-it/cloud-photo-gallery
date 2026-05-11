import React, { useState } from "react";
import { signIn, signUp, confirmSignUp } from "./auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      alert("Sign up successful! Check Gmail for OTP");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleConfirm = async () => {
    try {
      await confirmSignUp(email, code);
      alert("Account confirmed successfully!");
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

      <input
        type="text"
        placeholder="Verification Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSignUp}>Sign Up</button>

      <button onClick={handleConfirm}>Confirm Signup</button>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;