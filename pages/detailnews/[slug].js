import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import FullWidthAdvertisement from "../components/advertismentComponents/FullWidthAdvertisement";
import Head from "next/head";
import GridAdvetisment from "../components/advertismentComponents/GridAdvetisment";

const NewsDetails = () => {
  const router = useRouter();
  const [newsDetails, setNewsDetails] = useState();
  const [newsDescription, setNewsDescription] = useState();

  useEffect(() => {
    const { data } = router.query;
    if (data) {
      const parsedData = JSON.parse(data);
      setNewsDetails(parsedData);
      setNewsDescription(parsedData.details.split("<p>"));
    } else {
      console.log(`need to do API call with url parameter`);
    }
  }, [router.query.data]);

  return newsDetails ? (
    <Layout title={newsDetails.title}>
      <div className="container-fluid newsDetailsMain d-flex">
        <div className="newsDetail col-12">
          <div className="headingText p-lg-3">{newsDetails.title}</div>
          <div className="p-lg-3">
            <span className="newsSummery"> {newsDetails?.summery}</span>
            <div className="authorDetails d-flex align-items-center">
              <div className="imgDiv d-flex">
                <img src={newsDetails.author.avatar} alt="author" />
              </div>
              <span className="authorName mx-2">{newsDetails.author.name}</span>
            </div>
            <div className="d-flex col-12">
              <div className="col-lg-9 col-12 ">
                <div className="imgDiv">
                  <img src={newsDetails.img} className="img-fluid" />
                </div>
                <div className="newsContent p-lg-3 ">
                  {newsDescription && newsDescription.length > 0
                    ? newsDescription.map((detailByParagraph, index) => {
                        return index % 3 == 0 ? (
                          <div>
                            <FullWidthAdvertisement
                              img={
                                "https://www.onlinekhabar.com/wp-content/uploads/2022/11/1230_100-Pixel-Bolero-Udemsil-Nepali.jpg"
                              }
                              href="https://agnimahindra.com/"
                              newsDetailsPage={true}
                            />
                            <p
                              key={index}
                              dangerouslySetInnerHTML={{
                                __html: detailByParagraph,
                              }}
                            ></p>
                          </div>
                        ) : (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: detailByParagraph,
                            }}
                          ></p>
                        );
                      })
                    : ""}
                  <div className="addthis_inline_share_toolbox"></div>
                </div>
              </div>
              <div className="advertismentDiv col-lg-3 col-0 p-2">
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300-x-200-Online-Khabar.gif"
                  href="https://imeremit.com.np/"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/Dabur-Honey-Chyawanprash-300X200px_OK.gif"
                  href="https://www.youtube.com/watch?v=X-ASML0qidA"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300x200.gif"
                  href="https://tatacars.sipradi.com.np/inquiry2?utm_source=Onlinekhabar&utm_medium=Online&utm_campaign=NexonNo1&utm_id=MA_NexonNo1"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300-x-200-Online-Khabar.gif"
                  href="https://imeremit.com.np/"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/Dabur-Honey-Chyawanprash-300X200px_OK.gif"
                  href="https://www.youtube.com/watch?v=X-ASML0qidA"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300x200.gif"
                  href="https://tatacars.sipradi.com.np/inquiry2?utm_source=Onlinekhabar&utm_medium=Online&utm_campaign=NexonNo1&utm_id=MA_NexonNo1"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300-x-200-Online-Khabar.gif"
                  href="https://imeremit.com.np/"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/Dabur-Honey-Chyawanprash-300X200px_OK.gif"
                  href="https://www.youtube.com/watch?v=X-ASML0qidA"
                />
                <GridAdvetisment
                  img="https://www.onlinekhabar.com/wp-content/uploads/2022/11/300x200.gif"
                  href="https://tatacars.sipradi.com.np/inquiry2?utm_source=Onlinekhabar&utm_medium=Online&utm_campaign=NexonNo1&utm_id=MA_NexonNo1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <script
        type="text/javascript"
        src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5eb93c9cdd0ff66d"
        async
      ></script> */}
    </Layout>
  ) : (
    <Layout>
      <div className="d-flex justify-content-center align-items-center">
        <img src="/static/404Page.webp" alt="404NotFound" />
      </div>
    </Layout>
  );
};
export default NewsDetails;
