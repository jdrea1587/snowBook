import React, { useState } from 'react';
import axios from 'axios';

const Profile = (props) => {
  //console.log(props);
  const [newProfile, setNewProfile] = useState({
    typeOfRide: '',
    firstName: '',
    lastName: '',
    gender: '',
    zipCode: '',
    interest: '',
    level: '',
    isBackcountry: false,
    personalStory: '',
    contactInfo: '',
    isInstructor: false,
    isOver21: false
  });

  //NEED URL FOR POST
  // const addProfile = async (e) => {
  //   return await axios.post("", newProfile);
  // };

  //NEED URL FOR AXIOS CALL
  const addProfile = async (e) => {
    return await axios.post(
      'http://localhost:3001/api/users/createprofile',
      newProfile
    );
  };

  //NEED URL FOR PUT
  // const updateProfile = async () => {
  //   return await axios.put("", {})
  // }

  //to get values from fields
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // to change to boolean
  const handleBooleans = (e) => {
    let bool_value = e.target.value === 'true' ? true : false;
    setNewProfile({ ...newProfile, [e.target.name]: bool_value });
  };

  return (
    <div>
      <div for="first-name" className="grid-container-profile">
        Create your profile
        <form className="form" onSubmit={addProfile}>
          <div>
            <label>Enter first name: </label>
            <input
              id="first-name"
              type="text"
              name="firstName"
              onChange={handleChange}
              value={newProfile.firstName}
            ></input>

            <label for="last-name">Enter last name: </label>
            <input
              id="last-name"
              type="text"
              name="lastName"
              onChange={handleChange}
              value={newProfile.lastName}
            ></input>

            <label for="gender">Enter gender: </label>
            <input
              id="gender"
              type="text"
              name="gender"
              onChange={handleChange}
              value={newProfile.gender}
            ></input>

            <label for="zip">Enter zip code: </label>
            <input
              id="zip"
              type="text"
              name="zipCode"
              onChange={handleChange}
              value={newProfile.zipCode}
            ></input>

            <label for="interest">Enter interest: </label>
            <input
              id="interest"
              type="text"
              name="interest"
              onChange={handleChange}
              value={newProfile.interest}
            ></input>

            <label for="level">Enter level: </label>
            <input
              id="level"
              type="text"
              name="level"
              onChange={handleChange}
              value={newProfile.level}
            ></input>

            <label for="ride">Enter ride: </label>
            <input
              id="ride"
              type="text"
              name="typeOfRide"
              onChange={handleChange}
              value={newProfile.typeOfRide}
            ></input>

            <label for="country">Back country? </label>
            <select
              id="country"
              onChange={handleBooleans}
              name="isBackcountry"
              id="isBackcountry"
              value={newProfile.isBackcountry}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>

            <label for="story">Have a personal story to tell?</label>
            <input
              id="story"
              type="text"
              name="personalStory"
              onChange={handleChange}
              value={newProfile.personalStory}
            ></input>

            <label for="contact">Method of contact</label>
            <input
              id="contact"
              type="text"
              name="contactInfo"
              onChange={handleChange}
              value={newProfile.contactInfo}
            ></input>

            <label for="instructor">Instructor?</label>
            <select
              id="instructor"
              name="isInstructor"
              id="isInstructor"
              onChange={handleBooleans}
              value={newProfile.isInstructor}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>

            <label for="over">Over 21?</label>
            <select
              id="over"
              name="isOver21"
              id="isOver21"
              onChange={handleBooleans}
              value={newProfile.isOver21}
            >
              <option value="false">No</option>
              <option value="true">Yes</option>
            </select>
            <input
              type="submit"
              className="profile-btn"
              value="Create Profile"
            ></input>
          </div>
        </form>
      </div>

      <div className="user-profiles">
        <h1>FIRST AND LAST NAME HERE</h1>
        <h2>Gender: GENDER HERE</h2>
        <h2>Zip code: ZIP CODE HERE</h2>
        <h2>Interest: INTEREST HERE</h2>
        <h2>Level: LEVEL HERE</h2>
        <h2>Type of ride: TYPE OF RIDE HERE</h2>
        <h2>Backcountry: YES OR NO HERE</h2>
        <h2>Personal Story: </h2>
        <p> PERSONAL STORY HERE</p>
        <h3>Contact: CONTACT HERE</h3>
        <h3>Instructor: YES OR NO HERE</h3>
        <h3>Over 21: YES OR NO HERE</h3>
        <button className="profile-btn">Update profile</button>
        <button className="profile-btn">Delete profile</button>
      </div>
    </div>
  );
};

export default Profile;
