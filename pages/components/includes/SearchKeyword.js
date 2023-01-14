import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useHomePageData } from "../../context/HomePageContext";
import KeywordCard from "../homePageComponents/KeywordCard";

const SearchKeyword = () => {
  const { mostSearchedKeyWordData } = useHomePageData();
  return (
    <div className="searchComponentMain">
      <div className="container-fluid my-0 d-flex">
        <div className="d-flex">
          {mostSearchedKeyWordData && mostSearchedKeyWordData.length > 0
            ? mostSearchedKeyWordData.map((datum, index) => {
                return (
                  <KeywordCard key={index} img={datum.img} text={datum.text} />
                );
              })
            : ""}
        </div>
        <div className="inputField">
          <input
            type={"text"}
            name="keyword"
            placeholder="Search Keywords"
            autoComplete="off"
          />
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
export default SearchKeyword;
