import React, { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

const Login = () => {
  const navigate = useNavigate();
  const [logValues, setLogvalues] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {
    if(localStorage.getItem('sandeshaUser')){
      navigate('/');
    }
  }, [])
  

  const regisChange = (event) => {
    setLogvalues({ ...logValues, [event.target.name]: event.target.value });
  };

  const regSubmit = async (event) => {
    event.preventDefault();
    // regValidation();
    if (regValidation()) {
      const { password, userName } = logValues;
      const { data } = await axios.post(loginRoute, {
        userName,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      else if (data.status === true){
        localStorage.setItem("sandeshaUser", JSON.stringify(data.usernameCheck));
        navigate("/");
      }
      // console.log(data);
    }
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const regValidation = () => {
    const { password, userName } = logValues;
    if (password === "") {
      toast.error("enter the password", toastOptions);
    } else if (userName === "") {
      toast.error("Fill the user name.", toastOptions);
    } else {
      return true;
    }

    return false;
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={regSubmit}>
          <div className="regisLogo">
            <h1>Sandesha</h1>
          </div>
          <input
            type="text"
            placeholder="Name"
            name="userName"
            onChange={(e) => regisChange(e)}
          />
        
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => regisChange(e)}
          />
          
          <button>Login</button>

          <span>
            New User? <Link to="/register">Click Here</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #0f2731;
  .regisLogo {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    h1 {
      color: white;
      text-transform: uppercase;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    // background-color: #3A4A4D;
    // background-color: #1C313A;
    background-color: #0f2733;

    border-radius: 2rem;
    padding: 3rem 5rem;

    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #0f1731;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #0f5731;
        outline: none;
      }
    }

    button {
      //   background-color: #1C313A;
      background-color: #5b9890;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4 rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.3s ease-in-out;
      &:hover {
        background-color: #41b14f;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #5b9860;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Login;
