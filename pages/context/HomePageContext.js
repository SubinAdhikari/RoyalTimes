import React, { useState, useEffect, useContext, createContext } from "react";
import { LatestNews } from "../../data/LatestNews";

export const HomePageContext = createContext();

const HomePageContextProvider = (props) => {
  const navBarData = [
    {
      id: 1,
      text: "होमपेज",
      href: "होमपेज",
    },
    {
      id: 2,
      text: "समाचार",
      href: "समाचार",
    },
    {
      id: 3,
      text: "विजनेस",
      href: "विजनेस",
    },
    {
      id: 4,
      text: "जीवनशैली",
      href: "जीवनशैली",
    },
    {
      id: 5,
      text: "मनोरन्जन",
      href: "मनोरन्जन",
    },
    {
      id: 6,
      text: "विचार",
      href: "विचार",
    },
    {
      id: 7,
      text: "प्रवास",
      href: "प्रवास",
    },
    {
      id: 8,
      text: "खेलकुद",
      href: "खेलकुद",
    },
    {
      id: 9,
      text: "अन्य",
      href: "अन्य",
    },
  ];

  const navBarMobileData = [
    {
      id: 1,
      text: "होमपेज",
      href: "होमपेज",
      icon: "/static/favIconColorFul.svg",
    },
    {
      id: 2,
      text: "समाचार",
      href: "समाचार",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-news.png",
    },
    {
      id: 3,
      text: "विजनेस",
      href: "विजनेस",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-business.png",
    },
    {
      id: 4,
      text: "जीवनशैली",
      href: "जीवनशैली",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-lifestyle.png",
    },
    {
      id: 6,
      text: "सूचना प्रविधि",
      href: "सूचना प्रविधि",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-info.png",
    },
    {
      id: 5,
      text: "मनोरन्जन",
      href: "मनोरन्जन",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-movie.png",
    },
    {
      id: 6,
      text: "खेलकुद",
      href: "खेलकुद",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-sports.png",
    },
    {
      id: 7,
      text: "विचार",
      href: "विचार",
      icon: "https://www.onlinekhabar.com/wp-content/themes/onlinekhabar-2021/img/cat-icon-opinion.png",
    },
  ];
  const [mobileNavBarDisplay, setMobileNavBarDisplay] = useState(false);

  const [mostSearchedKeyWordData, setMostSearchedKeyWordData] = useState([
    {
      id: 1,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/08/Cholendra-Shumsher-JB-Rana-bayan-1-270x170.jpg",
      text: "चोलेन्द्रशमशेर जबरा",
    },
    {
      id: 2,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/12/Cholendra-Shamsher-Jabara-270x170.jpg",
      text: "संवैधानिक इजलास",
    },
    {
      id: 3,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/12/Croatia-Team-Semifinal-Worldcup2022-Cover-270x170.jpg",
      text: "फिफा विश्वकप",
    },
    {
      id: 4,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/12/Dr-Bharatraj-gautam-270x170.jpg",
      text: "भरतराज गौतम",
    },
    {
      id: 5,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/08/Cholendra-Shumsher-JB-Rana-bayan-1-270x170.jpg",
      text: "चोलेन्द्रशमशेर जबरा",
    },
    {
      id: 6,
      img: "https://www.onlinekhabar.com/wp-content/uploads/2022/12/Cholendra-Shamsher-Jabara-270x170.jpg",
      text: "संवैधानिक इजलास",
    },
  ]);

  const [latestNews, setLatestNews] = useState(LatestNews);

  return (
    <HomePageContext.Provider
      value={{
        navBarData,
        navBarMobileData,
        mobileNavBarDisplay,
        setMobileNavBarDisplay,
        mostSearchedKeyWordData,
        setMostSearchedKeyWordData,
        latestNews,
      }}
    >
      {props.children}
    </HomePageContext.Provider>
  );
};

export const useHomePageData = () => useContext(HomePageContext);

export default HomePageContextProvider;
