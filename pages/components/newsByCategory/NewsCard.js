import React from "react";
import { useRouter } from "next/router";

const NewsCard = ({ img, title, slug, details }) => {
  const router = useRouter();

  const redirectHandler = () => {
    router.push(
      {
        pathname: `/detailnews/${slug}`,
        query: { data: JSON.stringify(details) },
      },
      `/detailnews/${slug}`
    );
  };
  return (
    <div className="newsCardMainDiv">
      <div className="innerDiv" onClick={redirectHandler}>
        <div className="imgDiv">
          <img src={img} alt="imgs" />
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
};
export default NewsCard;
