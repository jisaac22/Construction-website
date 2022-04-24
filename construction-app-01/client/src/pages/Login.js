import React from 'react';

const Login = () => {
  
  return (
    <main>
      <section className="loginForm">
        <p className="loginInfo">Email:</p>
        <input className="loginInput" placeholder="email"></input>
      </section>
      <section className="loginForm">
        <p className="loginInfo">Password:</p>
        <input className="loginInput" placeholder="password"></input>  
      </section>
      <button className="loginFormBtn">Login</button>
    </main>
  )
}

export default Login;