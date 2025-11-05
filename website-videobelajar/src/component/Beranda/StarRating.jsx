import React from "react";
import "./StarRating.css";

const StarRating = ({ score = 0 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (score >= i) {
      stars.push("full");
    } else if (score >= i - 0.5) {
      stars.push("half");
    } else {
      stars.push("empty");
    }
  }

  return (
    <div className="star-rating">
      {stars.map((type, index) => (
        <span key={index} className={`star ${type}`} />
      ))}
    </div>
  );
};

export default StarRating;
