import React from "react";
import "../../assets/css/landing.css";

const LandingContent = () => {
  return (
    <div className="landing-main">
      <div className="landing-content">
        <h1>DOLOR MEDICUS</h1>
        <div className="p-info">
          <p>Centralised Medical System</p>
        </div>
        <div className="getstarted">
          <a
            className="getstarted-btn"
            href="/login"
            style={{ cursor: "pointer", textDecoration: "none" }}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingContent;
