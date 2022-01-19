import React from "react";

const Store = (props) => {
  const showStoreDetails = (id) => {
    props.history.push(`/storeDetail/${id}`);
  };

  return (
    <div className="grid-container">
      {props.store.map((str, idx) => (
        <div
          key={idx}
          className="profile-card"
          onClick={() => showStoreDetails(str.id)}
        >
          <div>
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
