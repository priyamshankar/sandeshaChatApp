import React, { useState } from "react";
import './cssFiles/LoginReg.css';

const Regis = () => {
  const [name, setname] = useState();
  const [userName, setuserName] = useState();
  const [password, setpassword] = useState();
  const [cnfPasswd, setcnfPasswd] = useState();

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>Registration</div>
      <div className="regisDiv">
        <form onSubmit={submit}>
          <input className="inputField" 
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
            placeholder='Enter Name'
          />
          <input className="inputField"
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
            placeholder='User Name'
          />
          <input className="inputField"
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input className="inputField"
            type="password"
            value={cnfPasswd}
            onChange={(e) => setcnfPasswd(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Regis;
