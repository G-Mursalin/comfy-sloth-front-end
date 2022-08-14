// React
import React from "react";
// CSS
import styles from "./Stars.module.css";
// Icons
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, i) => {
    return (
      <span key={i}>
        {stars >= i + 1 ? (
          <BsStarFill />
        ) : stars >= i + 0.5 ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });

  return (
    <div className={styles["stars-container"]}>
      <div className="stars">{tempStars}</div>
      <p className="reviews">({reviews} customer reviews)</p>
    </div>
  );
};

export default Stars;
