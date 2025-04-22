import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Token from './token';
import './Signin.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const call = () => {
    const raw = JSON.stringify({ email, password });

    fetch("https://jlu-backend-k6f7.onrender.com/api/users/login", {
      method: "POST",
      credentials: 'include', 
      headers: { "Content-Type": "application/json" },
      body: raw
      
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        Token.settoken(result.message);
        console.log(Token.gettoken());

        navigate('/');  
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    call();
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          placeholder="Enter your password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
