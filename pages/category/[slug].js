import React from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/newsByCategory/NewsCard";
import { useRouter } from "next/router";
import { LatestNews } from "../../data/LatestNews";

const NewsByCategory = () => {
  const router = useRouter();

  return (
    <Layout>
      <div className="headingDiv container-fluid">
        <div className="innerDiv p-3">
          <h2>{router.query.slug}</h2>
        </div>
      </div>
      <div className="newsByCategoryMainDiv container-fluid d-flex  flex-wrap">
        {LatestNews && LatestNews.length > 0
          ? LatestNews.map((datum, index) => {
              return (
                <NewsCard
                  key={index}
                  details={datum}
                  slug={datum.slug}
                  title={datum.title}
                  img={datum.img}
                />
              );
            })
          : ""}
      </div>
    </Layout>
  );
};
export default NewsByCategory;
