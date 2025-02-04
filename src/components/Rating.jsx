import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, onClick, style }) => {
  return (
    <>
      (
      {[...Array(6)].map((_, index) => {
        return (
          <span key={index} onClick={(index) => onClick(index)} style={style}>
            {rating >= index ? (
              <AiFillStar fontSize="15px" />
            ) : (
              <AiOutlineStar fontSize="15px" />
            )}
          </span>
        );
      })}
      )
    </>
  );
};

export default Rating;
