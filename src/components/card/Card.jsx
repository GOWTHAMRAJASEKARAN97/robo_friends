import React from "react";
import "./card.css";
import { useLocation, useNavigate } from "react-router-dom";

const Card = ({ datas }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleNavigate = (user) => {
    const {
      name: { first, last },
    } = user;
    const userName = first + last;
    navigate(`/description/${userName}`, { state: { user ,userName} });
  };

  return (
    <div className="card-container">
      {datas?.map((user, index) => (
        <div className="card" key={index}>
          <img src={user?.imageUrl} alt={`User ${index}`} className="card-img" />
          <div className="card-body">
            <h3>
              {user?.name?.first} {user?.name?.last}
            </h3>

            {pathname === "/" && (
              <>
                <p>{user.email}</p>
                <button onClick={() => handleNavigate(user)}>
                  Description
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
