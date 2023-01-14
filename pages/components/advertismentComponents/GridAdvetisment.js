import React from "react";

const GridAdvetisment = ({ img, href }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <div className="gridAdvertismentMain d-flex justify-content-center align-items-center my-2">
        <img src={img} alt="adv" />
      </div>
    </a>
  );
};
export default GridAdvetisment;
