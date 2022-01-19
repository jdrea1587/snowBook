import React from "react";

const City = (props) => {
  const showCityDetails = (id) => {
    props.history.push(`/mountain/${id}`);
  };

  return (
    <div className="grid-container">
      {props.cities.map((str, idx) => (
        <div
          key={idx}
          className="profile-card"
          onClick={() => showCityDetails(str.id)}
        >
          <div>{str.name}</div>
        </div>
      ))}
    </div>
  );
};

export default City;
