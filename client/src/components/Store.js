import React from "react";

const Store = (props) => {
  // to go to storeDetail.js
  const showStoreDetails = (id) => {
    props.history.push(`/storeDetail/${id}`);
  };

  return (
    <div className="grid-container">
      {props.store.map((str, idx) => (
        <div className="profile-card" onClick={() => showStoreDetails(str.id)}>
          <div key={idx}>
            {str.name}
            {str.services}
            {str.rating}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Store;
