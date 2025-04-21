import React, { useState } from 'react';
import Token from './token';
function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  function redirect(result){
    console.log(result);
    Token.settoken(result.token);
    console.log(Token.gettoken())
  }
  const call = () => {
    const raw = JSON.stringify({
      email,
      password,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    console.log(raw);
    fetch("http://localhost:5000/api/users/login", requestOptions)
      .then((response) => response.json())
      .then((result) => redirect(result))
      .catch((error) => console.error('Error:', error));

  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    call();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your email here"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Enter your password here"
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
