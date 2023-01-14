import React from "react";

const KeywordCard = ({ img, text }) => {
  return (
    <div className="keywordCardMain d-flex justify-content-center align-items-center mx-2 p-2">
      <div className="imgDiv">
        <img src={img} alt={text} />
      </div>
      <span>{text}</span>
    </div>
  );
};
export default KeywordCard;
