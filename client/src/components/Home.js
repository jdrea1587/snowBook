import React from 'react';

const Home = (props) => {
  const showProfiles = (id) => {
    props.history.push(`/profiledetail/${id}`);
  };

  return (
    <div className="grid-container">
      {props.home.map((ele, idx) => (
        <div
          key={idx}
          className="profile-card"
          onClick={() => showProfiles(ele.id)}
        >
          <div key={idx}>
            {ele.firstName}
            {ele.lastName}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
