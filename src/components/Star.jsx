import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Star = ({ stars }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    const num = index + 0.5;
    console.log(stars);

    // if 4.3, 0 => 1, 1 => 2, 2 => 3, 3 => 4, 4 => 4.5
    return (
      <span className="text-yellow-500">
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= num ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    );
  });
  return <div className="flex space-x-1">{ratingStar}</div>;
};

export default Star;
