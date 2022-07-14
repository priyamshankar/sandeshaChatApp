import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [regValues, setregValues] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const regisChange = (event) => {
    setregValues({ ...regValues, [event.target.name]: event.target.value });
  };

  const regSubmit = (event) => {
    event.preventDefault();
    regValidation();
  };

  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const regValidation = () => {
    const { password, confirmPassword, userName, email } = regValues;
    if (password !== confirmPassword) {
      toast.error("Password and confirm password didn't matched", toastOptions);
    }
    if (email === "") {
      toast.error("Email field can't be left blank", toastOptions);
    }
    if (userName === "") {
      toast.error("Fill the user name.", toastOptions);
    }
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
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => regisChange(e)}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={(e) => regisChange(e)}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            onChange={(e) => regisChange(e)}
          />
          <button>New User</button>

          <span>
            Already a User? <Link to="/login">Login</Link>
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

export default Register;
