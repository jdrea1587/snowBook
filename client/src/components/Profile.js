import React, { useState } from "react";
import axios from "axios";

const Profile = (props) => {
  const [newProfile, setNewProfile] = useState({
    typeOfRide: "",
    firstName: "",
    lastName: "",
    image: "",
    gender: "",
    zipCode: "",
    interest: "",
    level: "",
    isBackcountry: false,
    personalStory: "",
    contactInfo: "",
    isInstructor: false,
    isOver21: false,
  });

  const addProfile = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:3001/api/users/createprofile",
      newProfile
    );

    const resp = await axios.get(`http://localhost:3001/api/users`);

    let lastEle = resp.data.users.slice(-1)[0].id;
    props.history.push(`/profiledetail/${lastEle}`);
    window.location.reload();
  };
  //to get values from fields
  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  // to change to boolean
  const handleBooleans = (e) => {
    let bool_value = e.target.value === "true" ? true : false;
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

            <label for="last-name">Enter image URL: </label>
            <input
              id="image"
              type="text"
              name="image"
              onChange={handleChange}
              value={newProfile.image}
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
    </div>
  );
};

export default Profile;
