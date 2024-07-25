import React from "react";
import { useNavigate } from "react-router-dom";
import "./noPage.css";

const NoPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <h1>404 page not found</h1>
      <button onClick={handleNavigate}>Back to Home</button>
    </div>
  );
};

export default NoPage;
