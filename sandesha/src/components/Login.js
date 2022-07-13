import React, { useState } from "react";
import './cssFiles/LoginReg.css';

const Login = () => {
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();


  const submit = (e) => {
    e.preventDefault();
    // setuserName(password);
    console.log(userName);
    console.log(password);
  };

  return (
    <>
      <p>Login</p>
      <div className="regisDiv">
        <form onSubmit={submit}>
          <input
            type="text"
            className="inputField"
            value={userName}
            placeholder="Enter the user id"
            onChange={(e) => setuserName(e.target.value)}
          />

          <input
            type="password"
            className="inputField"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
