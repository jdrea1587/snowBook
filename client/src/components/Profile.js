import React from "react";

const Profile = () => {
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
            <label for="ride">Enter ride: </label>
            <input type="text"></input>
            <label for="backCountry">Enter Backcountry: </label>
            <input type="text"></input>
            <label for="personalStory">Have a personal story to tell?</label>
            <input type="text"></input>
            <label for="contact">Method of contact</label>
            <input type="text"></input>
            <label for="instructor">Instructor?</label>
            <select name="instructor" id="instructor">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
            <label for="instructor">Instructor?</label>
            <select name="age" id="age">
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
