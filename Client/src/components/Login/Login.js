import React from "react";
import "../../assets/css/login.css";
import loginimg from "../../assets/media/login.png";
import { useState } from "react";
import { Redirect } from "react-router";
const Login = () => {
  const [redirect, setRedirect] = useState(null);
  const [userEnteredData, setuserEnteredData] = useState({
    uid: "",
    password: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setuserEnteredData({ ...userEnteredData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    window.location.href = `http://localhost:5000/auth/google/signup`;
  };

  return (
    <div className="login">
      {redirect}
      <div className="login-left">
        <div className="login-head">
          <h1>DOLOR MEDICUS</h1>
          <p>Centralised Medical System</p>
        </div>
        <img src={loginimg} width="400px"></img>
      </div>
      <div className="login-right">
        <div className="login-box">
          <div className="login-content">
            <h1>Login</h1>
            <form className="form" id="loginForm">
              <input
                className="forminput"
                type="text"
                name="uid"
                placeholder="UID"
                value={userEnteredData.uid}
                onChange={handleInput}
              ></input>
              <input
                className="forminput"
                type="password"
                name="password"
                placeholder="Password"
                value={userEnteredData.password}
                onChange={handleInput}
              ></input>
              <a onClick={submitHandler}>
                <input
                  className="signupbtn"
                  form="loginForm"
                  type="submit"
                  value="Login with Google"
                />
              </a>
            </form>

            <p>
              Don't have an account?{" "}
              <a className="signup-a" href="/signUp">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
