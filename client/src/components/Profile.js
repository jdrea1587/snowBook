import React, { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    gender: "",
    level: "",
    typeOfRide: "",
    isBackcountry: false,
    personalStory: "",
    contactInfo: "",
    isInstructor: false,
    isOver21: false,
  });

  return (
    <div className="profile">
      Create your profile
      <div>
        <form>
          <div className="profile-form">
            <label for="name">Enter full name: </label>
            <input type="text"></input>
            <label for="gender">Enter gender: </label>
            <input type="text"></input>
            <label for="level">Enter level: </label>
            <input type="text"></input>
            <label for="typeOfRide">Enter ride: </label>
            <input type="text"></input>
            <label for="isBackcountry">Enter Backcountry: </label>
            <input type="text"></input>
            <label for="personalStory">Have a personal story to tell?</label>
            <input type="text"></input>
            <label for="contactInfo">Method of contact</label>
            <input type="text"></input>
            <label for="isInstructor">Instructor?</label>
            <select name="isInstructor" id="isInstructor">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label for="isOver21">Over 21?</label>
            <select name="isOver21" id="isOver21">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <input type="submit" value="Create Profile"></input>
          </div>
        </form>
      </div>
      {/* <div className="user-profile">
        <h1>NAME HERE</h1>

        <h2>Gender: GENDER HERE</h2>
        <h2>Type of ride: TYPE OF RIDE HERE</h2>
        <h2>Backcountry: BACKCOUNTRY HERE</h2>
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
