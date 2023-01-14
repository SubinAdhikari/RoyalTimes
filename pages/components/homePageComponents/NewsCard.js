import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NewsCard = ({
  img = false,
  title,
  author,
  desc = false,
  slug,
  details,
  showImg,
}) => {
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
    <div className="newsCardMain container-fluid d-flex flex-column justify-content-center align-items-center py-lg-5">
      <h2 onClick={redirectHandler}>{title}</h2>
      {img && showImg ? (
        <div className="newsImg my-3">
          <img src={img} alt={title} />
        </div>
      ) : (
        ""
      )}
      <div className="authorSection d-flex justify-content-center align-items-center w-100">
        <div className="imgDiv">
          <img src={author?.avatar} alt="author" className="img-fluid" />
        </div>
        <span className="authorName">{author?.name}</span>
      </div>
      {desc ? <span className="description">{desc}</span> : ""}
    </div>
  );
};
export default NewsCard;
