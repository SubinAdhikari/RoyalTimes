import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useHomePageData } from "../../context/HomePageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const {
    navBarData,
    navBarMobileData,
    mobileNavBarDisplay,
    setMobileNavBarDisplay,
  } = useHomePageData();

  const toggleNavBarDrawer = () => {
    mobileNavBarDisplay
      ? setMobileNavBarDisplay(false)
      : setMobileNavBarDisplay(true);
  };

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (window.scrollY > 120) {
      document.getElementById("navLogo").style.opacity = "1";
    }
    if (window.scrollY < 120 && document.getElementById("navLogo")) {
      document.getElementById("navLogo").style.transition = ".5s ease-in-out";
      document.getElementById("navLogo").style.opacity = "0";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));
  });

  return (
    <>
      {/* Larger screen navbar starts */}
      <nav className="navBarMainLargeScreen sticky-top">
        <div className="container-fluid d-flex justify-content-between">
          <ul className="d-flex justify-content-center align-items-center">
            <li>
              <Link href={"/"}>
                <img
                  id="navLogo"
                  // src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-icon.png"
                  src="/static/favIcon.svg"
                  alt="logo"
                />
              </Link>
            </li>
            {navBarData && navBarData.length > 0
              ? navBarData.map((datum, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={
                          datum.href === "होमपेज"
                            ? "/"
                            : `/category/${datum.href}`
                        }
                        className={
                          datum.href === router.query.slug ? "highlighted" : ""
                        }
                      >
                        {datum.text}
                      </Link>
                    </li>
                  );
                })
              : ""}
          </ul>
          <ul className="d-flex justify-content-center align-items-center">
            <button className="englishBtn">English</button>
            <li>
              <FontAwesomeIcon
                icon={faBars}
                className="hamburger"
                onClick={toggleNavBarDrawer}
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </nav>
      {/* Larger screen navbar ends */}

      {/* Small screen navbar starts */}
      <div
        className="navBarMainSmallScreen"
        style={
          mobileNavBarDisplay
            ? { width: "300px", marginRight: "0px" }
            : { width: "0px", marginRight: "-300px" }
        }
        // className="navBarMainSmallScreen"
      >
        <FontAwesomeIcon
          icon={faClose}
          onClick={toggleNavBarDrawer}
        ></FontAwesomeIcon>
        <ul>
          {navBarMobileData && navBarMobileData.length > 0
            ? navBarMobileData.map((datum, index) => {
                return (
                  <li key={index}>
                    <img src={datum.icon} alt="icon" />
                    <Link
                      href={
                        datum.href === "होमपेज"
                          ? "/"
                          : `/category/${datum.href}`
                      }
                      className={
                        datum.href === router.query.slug ? "highlighted" : ""
                      }
                    >
                      {datum.text}
                    </Link>
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
      {/* Small screen navbar ends */}
    </>
  );
};
export default Navbar;
