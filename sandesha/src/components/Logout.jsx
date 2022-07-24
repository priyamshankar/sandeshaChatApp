import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { BiPowerOff } from "react-icons/bi";

function Logout() {
  const navigate = useNavigate();
  const logoutClick = async () => {
    await localStorage.clear();
    navigate("/login");
  };
  return <Button onClick={logoutClick}>
    <BiPowerOff/>
  </Button>;
}
const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
padding: 0.5rem;
border-radius:0.5rem;
background-color: green;
border: none;
cursor: pointer;

svg{
    font-size: 1.3rem;
    color: white;
}
`;

export default Logout;
