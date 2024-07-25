import React from "react";
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <h1 className="heading">ROBO FRIENDS</h1>
      {pathname !== "/" && <button onClick={handleNavigate}>Home</button>}
    </div>
  );
};

export default Header;
