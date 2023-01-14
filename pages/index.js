import Head from "next/head";
import FullWidthAdvertisement from "./components/advertismentComponents/FullWidthAdvertisement";
import NewsByCategory from "./components/homePageComponents/NewsByCategory";
import NewsCard from "./components/homePageComponents/NewsCard";
import Layout from "./components/Layout";
import { useHomePageData } from "./context/HomePageContext";
import { newsByCategory } from "../data/LatestNews";

export default function Home() {
  const { latestNews } = useHomePageData();
  return (
    <Layout>
      <FullWidthAdvertisement
        img={
          "https://www.onlinekhabar.com/wp-content/uploads/2022/03/Mitsubishi-1230x100-F02.gif"
        }
        href="https://www.facebook.com/Leon-Motors-Private-Limited-246429365402222/"
      />
      {latestNews && latestNews.length > 0
        ? latestNews.map((datum, index) => {
            return (
              <NewsCard
                key={index}
                img={datum.img}
                title={datum.title}
                author={datum.author}
                desc={datum.summery}
                slug={datum.slug}
                details={datum}
                showImg={datum.showImgInHomePage}
              />
            );
          })
        : ""}
      <FullWidthAdvertisement
        img={
          "https://www.onlinekhabar.com/wp-content/uploads/2022/11/1230_100-Pixel-Bolero-Udemsil-Nepali.jpg"
        }
        href="https://agnimahindra.com/"
      />
      {newsByCategory && newsByCategory.length > 0
        ? newsByCategory.map((datum, index) => {
            return (
              <NewsByCategory
                data={datum}
                key={index}
                index={index}
                slug={datum.slug}
              />
            );
          })
        : ""}
    </Layout>
  );
}
