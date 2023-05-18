import React from "react";

const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
