import React from "react";
import Layout from "./components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center align-items-center">
        <img src="/static/404Page.webp" alt="404NotFound" />
      </div>
    </Layout>
  );
};
export default NotFound;
