import React from 'react';

const Home = ({ profiles, history }) => {
  const showProfiles = (id) => {
    history.pushState(`/${id}`);
  };

  return (
    <div className="grid-container">
      {profiles.map(
        ({
          index,
          _id,
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
          zipCode
        }) => (
          <div
            key={index}
            className="profile-card"
            onClick={() => showProfiles(_id)}
          >
            <div>{firstName}</div>
          </div>
        )
      )}
    </div>
  );
};

export default Home;
