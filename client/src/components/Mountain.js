import React, { useState, useEffect } from "react";
import axios from "axios";

const Mountain = (props) => {
  //console.log(props);
  const [cityDetails, setCityDetails] = useState([]);

  const displayMountain = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/cities/${props.match.params.id}`
    );
    setCityDetails(response.data.city);
  };

  useEffect(() => {
    displayMountain();
  }, []);

  return (
    <div>
      <div className="mountain-cards">
        <h1>{cityDetails.name}</h1>
        <h2>RESORTS</h2>
      </div>
    </div>
  );
};

export default Mountain;
