import React, { useState } from "react";

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
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => setuserName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input
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
