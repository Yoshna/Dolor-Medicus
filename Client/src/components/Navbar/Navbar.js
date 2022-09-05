import React from "react";
import "../../assets/css/navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Navbar = (props) => {
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    axios.get("/auth/login").then((res) => {
      // console.log(res);
      // console.log("fvvf");
      if (res.data) {
        setIsLogin(true);
      }
    });
  }, []);
  const x = props.p ? "nav-main" : "nav-b";

  let routes = (
    <>
      <div className={x}>
        <div className="nav-links">
          <a href="/login">About</a>
          {/* <a href="/login">Login</a> */}
          <a href="/login" className="signup-btn">
            Login
          </a>
        </div>
      </div>
    </>
  );

  if (isLogin) {
    routes = (
      <>
        <div className={x}>
          <div className="nav-links">
            <a href="/">Dashboard</a>
            <a href="/addpatient">Add Patients</a>
            <a href="/patients">Patients</a>
            <a href="/">About</a>
            <a href="/logout" className="signup-btn">
              Logout
            </a>
          </div>
        </div>
      </>
    );
  }

  return <div>{routes}</div>;
};

export default Navbar;
