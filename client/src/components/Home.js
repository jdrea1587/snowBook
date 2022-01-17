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
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
