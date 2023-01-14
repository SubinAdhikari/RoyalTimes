import Link from "next/link";
import React from "react";
import { footerDesktopData, footerMobileData } from "../../../data/FooterData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="footerMainDiv col-12">
      <div className="footerTop col-12">
        {/* For Large Device */}
        <div className="largeDevice col-12 d-flex justify-content-between flex-wrap container-fluid">
          {footerDesktopData && footerDesktopData.length > 0
            ? footerDesktopData.map((datum, index) => {
                return (
                  <div className={`col-lg-2 col-6 my-5`} key={index}>
                    <ul>
                      <li className="mainTitle">{datum.title}</li>
                      {datum.links && datum.links.length > 0
                        ? datum.links.map((linkData, ind) => {
                            return (
                              <Link href={linkData.href} key={ind}>
                                <li>{linkData.title}</li>
                              </Link>
                            );
                          })
                        : ""}
                    </ul>
                  </div>
                );
              })
            : ""}
        </div>
        {/* For Large Device */}
        {/* For Small Device */}
        <div className="smallDevice col-12 flex-wrap container-fluid text-center">
          {footerMobileData && footerMobileData.length > 0
            ? footerMobileData.map((datum, index) => {
                return (
                  <div key={index} className="my-4">
                    <ul>
                      <li className="mainTitle">{datum.title}</li>
                      <ul>
                        {datum.links && datum.links.length > 0
                          ? datum.links.map((linkData, ind) => {
                              return (
                                <Link href={linkData.href} key={ind}>
                                  <li>{linkData.title}</li>
                                </Link>
                              );
                            })
                          : ""}
                      </ul>
                    </ul>
                  </div>
                );
              })
            : ""}
        </div>
        {/* For Small Device */}
      </div>
      <div className="footerBottom col-12 container-fluid d-flex flex-wrap justify-conetnt-center align-items-center">
        <div className="col-lg-2 col-12">
          <img
            className="logo"
            // src="https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/ok-logo-main.png"
            src="/static/rtlogo.svg"
            alt="logo"
          />
        </div>
        <div className="col-lg-2 col-6 d-flex flex-column justify-content-center align-items-center">
          <span className="designation">अध्यक्ष तथा प्रबन्ध निर्देशक:</span>
          <span className="name">सुविन अधिकारी</span>
        </div>
        <div className="col-lg-1 col-6 d-flex flex-column justify-content-center align-items-center">
          <span className="designation">प्रधान सम्पादकः</span>
          <span className="name">निरजराज महासेठ</span>
        </div>
        <div className="col-lg-2 col-12 d-flex flex-column justify-content-center align-items-center">
          <span className="designation">सूचना विभाग दर्ता नं.</span>
          <span className="name">२७१ / १४३–१४</span>
        </div>
        <div
          className="col-lg-2 col-12 d-flex flex-column justify-content-center align-items-center"
          style={{ fontSize: "14px" }}
        >
          <span>+977-4444444, +977-1234567</span>
          <span>news@royalstimes.com</span>
        </div>
        <div className="col-lg-3 col-12 d-flex flex-column justify-content-center align-items-center">
          <div>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
          <span style={{ fontSize: "11px" }}>
            &copy; २००२२-२०२२ royalstimes.com सर्वाधिकार सुरक्षित
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
