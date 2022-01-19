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
<<<<<<< HEAD
          <div key={idx}>
=======
          <div className="profile-names" key={idx}>
            <img src={ele.image} />
>>>>>>> 663320f608125dab77876dabf4612a1c42607901
            <div>{ele.firstName}</div>
            <div>{ele.lastName}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
