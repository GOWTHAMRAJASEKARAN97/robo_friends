import React from "react";
import Card from "../../components/card/Card";
import { useLocation } from "react-router-dom";
import "./description.css";

const Description = () => {
  const location = useLocation();
  const user = location?.state?.user;
  const userName = location?.state?.userName;
  const userCountry = user?.location?.country;
  const registrationDate = user?.registered?.date?.split("T")?.[0];

  return (
    <div className="container">
      <Card datas={[user]} />
      <p className="about">
        {userName} is a robot in {userCountry} registered on {registrationDate}
      </p>
    </div>
  );
};

export default Description;
