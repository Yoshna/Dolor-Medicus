import React from "react";
import "../../assets/css/signup.css";
// import swal from "sweetalert";
import loginimg from "../../assets/media/login.png";
import { useState } from "react";
import { Navigate } from "react-router-dom";
// import URL from "../../URL";

const Signup = () => {
  const [redirect, setRedirect] = useState(null);
  const [userEnteredData, setuserEnteredData] = useState({
    name: "",
    email: "",
    password: "",
    uid: "",
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setuserEnteredData({ ...userEnteredData, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const submitGoogleHandler = (event) => {
    event.preventDefault();
    console.log(123);
    console.log(process.env.REACT_APP_BASE_URL);
    // <Navigate to="http://localhost:5000/auth/google" />;

    window.location.href = `http://localhost:5000/auth/google/signup`;
  };

  return (
    <div className="signup">
      {redirect}
      <div className="signup-left">
        <div className="signup-head">
          <h1>DOLOR MEDICUS</h1>
          <p>Centralised Medical System</p>
        </div>
        <img src={loginimg} width="400px"></img>
      </div>
      <div className="signup-right">
        <div className="signup-box">
          <div className="signup-content">
            <h1>Sign Up</h1>
            <form className="form" id="doctorForm">
              <input
                className="forminput"
                type="text"
                name="name"
                placeholder="Name"
                value={userEnteredData.name}
                onChange={handleInput}
              ></input>
              <input
                className="forminput"
                type="text"
                name="email"
                placeholder="Email"
                value={userEnteredData.email}
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
              <input
                className="forminput"
                type="text"
                name="uid"
                placeholder="Unique Identification Number"
                value={userEnteredData.uid}
                onChange={handleInput}
              ></input>

              <a onClick={submitHandler}>
                <input
                  className="signupbtn"
                  form="doctorForm"
                  type="submit"
                  value="Sign Up"
                />
              </a>

              <button onClick={submitGoogleHandler} className="signupbtn">
                Sign Up using Google
              </button>
            </form>

            <p>
              Already have an account? <a className="signup-a">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
