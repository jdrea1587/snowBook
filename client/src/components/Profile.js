import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    gender: "",
    interest: "",
    level: "",
    typeOfRide: "",
    isBackcountry: false,
    personalStory: "",
    contactInfo: "",
    isInstructor: false,
    isOver21: false
  });

  const testProfile = [];

  //NEED URL FOR AXIOS CALL
  const addProfile = async (e) => {
    return await axios.post('', newProfile);
  };

  //to get values from fields
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // to change to boolean
  const handleBooleans = (e) => {
    let bool_value = e.target.value == "true" ? true : false;
    setNewProfile({ ...newProfile, [e.target.name]: bool_value });
  };

  //to create profile
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="grid-container-profile">
        Create your profile
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter full name: </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={newProfile.name}
            ></input>

            <label>Enter gender: </label>
            <input
              type="text"
              name="gender"
              onChange={handleChange}
              value={newProfile.gender}
            ></input>

            <label>Enter interest: </label>
            <input
              type="text"
              name="interest"
              onChange={handleChange}
              value={newProfile.interest}
            ></input>

            <label>Enter level: </label>
            <input
              type="text"
              name="level"
              onChange={handleChange}
              value={newProfile.level}
            ></input>

            <label>Enter ride: </label>
            <input
              type="text"
              name="typeOfRide"
              onChange={handleChange}
              value={newProfile.typeOfRide}
            ></input>

            <label>Back country? </label>
            <select
              onChange={handleBooleans}
              name="isBackcountry"
              id="isBackcountry"
              value={newProfile.isBackcountry}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>

            <label>Have a personal story to tell?</label>
            <input
              type="text"
              name="personalStory"
              onChange={handleChange}
              value={newProfile.personalStory}
            ></input>

            <label>Method of contact</label>
            <input
              type="text"
              name="contactInfo"
              onChange={handleChange}
              value={newProfile.contactInfo}
            ></input>

            <label>Instructor?</label>
            <select
              name="isInstructor"
              id="isInstructor"
              onChange={handleBooleans}
              value={newProfile.isInstructor}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>

            <label>Over 21?</label>
            <select
              name="isOver21"
              id="isOver21"
              onChange={handleBooleans}
              value={newProfile.isOver21}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <input type="submit" value="Create Profile"></input>
          </div>
        </form>
      </div>

      {/* <div className="user-profile">
        <h1>NAME HERE</h1>

        <h2>Gender: GENDER HERE</h2>
        <h2>Type of ride: TYPE OF RIDE HERE</h2>
        <h2> Interest: INTEREST HERE</h2>
        <h2>Level: LEVEL HERE</h2>
        <h2>Backcountry: YES OR NO HERE</h2>
        <h2>Personal Story: </h2>
        <p>PERSONAL STORY HERE</p>
        <h3>Contact: CONTACT HERE</h3>
        <h3>Instructor: YES OR NO HERE</h3>
        <h3>Over 21: YES OR NO HERE</h3>
      </div> */}
    </div>
  );
};

export default Profile;
