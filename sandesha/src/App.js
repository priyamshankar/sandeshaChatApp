import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Regis from "./components/Regis";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Regis/>}/>

        </Routes>
      </BrowserRouter>
      {/* <p>This is inside the app .js</p> */}
    </>
  );
}

export default App;
