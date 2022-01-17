import React from "react";

const Home = (props) => {
  const showProfiles = (id) => {
    props.history.push(`/profiledetail/${id}`);
  };

  return (
    <div className="grid-container">
      {props.home.map(
        ({
          index,
          id,
          interest,
          level,
          firstName,
          typeOfRide,
          isBackcountry,
          gender,
          personalStory,
          contactInfo,
          isInstructor,
          isOver21,
          lastName,
          zipCode,
        }) => (
          <div
            key={id}
            className="profile-card"
            onClick={() => showProfiles(id)}
          >
            <div>
              {firstName}
              {lastName}
              {interest}
              {level}
              {gender}
              {zipCode}
            </div>
          </div>
        )
      )}
      {/* <div className="home-profiles">
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
      </div> */}
    </div>
  );
};

export default Home;
