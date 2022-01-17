import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileDetail = (props) => {
  const [profileDetails, setProfileDetails] = useState([]);

  const displayUser = async () => {
    const response = await axios.get(
      `http://localhost:3001/api/users/${props.match.params.id}`
    );
    setProfileDetails(response.data.userProfile);
  };

  useEffect(() => {
    displayUser();
  }, []);

  return (
    <div>
      <div className="user-profiles">
        <h1>{profileDetails.firstName}</h1>
        <h2>Gender: {profileDetails.lastName}</h2>
        <h2>Zip code: {profileDetails.zipCode}</h2>
        <h2>Interest: {profileDetails.interest}</h2>
        <h2>Level: {profileDetails.level}</h2>
        <h2>Type of ride: {profileDetails.typeOfRide}</h2>
        <h2>Backcountry: YES OR NO HERE</h2>
        <h2>Personal Story: </h2>
        <p> {profileDetails.personalStory}</p>
        <h3>Contact: {profileDetails.personalStory}</h3>
        <h3>Instructor: YES OR NO HERE</h3>
        <h3>Over 21: YES OR NO HERE</h3>
        <button className="profile-btn">Update profile</button>
        <button className="profile-btn">Delete profile</button>
      </div>
    </div>
  );
};

export default ProfileDetail;
