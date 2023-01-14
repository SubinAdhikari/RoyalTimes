import React, { useEffect, useState } from "react";
import NepaliDate from "nepali-date-converter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useHomePageData } from "../../context/HomePageContext";
import Link from "next/link";

const Header = () => {
  const [todaysDateEnglish, setTodaysDateEnglish] = useState(new Date());
  const [todaysDateNepali, setTodaysDateNepali] = useState("");

  const { mobileNavBarDisplay, setMobileNavBarDisplay } = useHomePageData();

  useEffect(() => {
    const dateInNepali = new NepaliDate(todaysDateEnglish);
    NepaliDate.language = "np";
    setTodaysDateNepali(dateInNepali.format("ddd DD, MMMM YYYY")); // 'आइतबार १०, फाल्गुण २०५४'
  }, [todaysDateEnglish]);

  const toggleNavBarDrawer = () => {
    mobileNavBarDisplay
      ? setMobileNavBarDisplay(false)
      : setMobileNavBarDisplay(true);
  };

  return (
    <div className="headerMainDiv">
      <div className="container-fluid">
        <div className="logoDiv d-flex justify-content-center align-items-center col-lg-3 col-12">
          <div className="d-flex flex-column w-100">
            <Link href={"/"}>
              <img
                className="mainLogo"
                src="/static/rtlogo.svg"
                // src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-logo-main.png"
                alt="royals times"
              />
            </Link>
            <span>{todaysDateNepali}</span>
          </div>

          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleNavBarDrawer}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );
};
export default Header;
