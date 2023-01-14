import React from "react";
import Head from "next/head";
import Header from "./includes/Header";
import Navbar from "./includes/Navbar";
import SearchKeyword from "./includes/SearchKeyword";
import Footer from "./includes/Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>
          {props.title
            ? props.title
            : "Royals Times - No 1 News Portal from Nepal"}
        </title>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favIconColorFul.svg"
        />
      </Head>
      <Header />
      <Navbar />
      <SearchKeyword />
      {props.children}
      <Footer />
    </>
  );
};
export default Layout;
