import React from "react";

const FullWidthAdvertisement = ({
  img,
  href,
  widthSize = "no",
  newsDetailsPage = false,
}) => {
  const openLinkHandler = (link) => {
    window.open(link, "_blank");
  };
  return (
    <div className="fullWidthAdvertisementMain d-flex justify-content-center align-items-center">
      <div
        className="innerDiv"
        style={
          widthSize === "full"
            ? { width: "100vw", borderRadius: "5px" }
            : newsDetailsPage
            ? { width: "80vw" }
            : { width: "90vw" }
        }
      >
        {/* Image size should be : 	1230 × 100 px, otherwise it will effect the design */}
        <img
          src={img}
          alt="advert"
          onClick={() => openLinkHandler(href)}
          style={{ cursor: "pointer" }}
          className="img-fluid"
        />
      </div>
    </div>
  );
};
export default FullWidthAdvertisement;
