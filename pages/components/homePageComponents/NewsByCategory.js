import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import FullWidthAdvertisement from "../advertismentComponents/FullWidthAdvertisement";
import GridAdvetisment from "../advertismentComponents/GridAdvetisment";
import { useRouter } from "next/router";

const NewsByCategory = ({ data, index }) => {
  const router = useRouter();
  return (
    <div
      className="newsByCategoryMain col-12 container-fluid d-flex my-3"
      style={
        index % 2 == 0
          ? { backgroundColor: "#f4f6f8" }
          : { backgroundColor: "#fff" }
      }
    >
      <div className="newsDiv col-lg-9 col-12 p-2">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <span className="heading">{data?.name}</span>
            <FontAwesomeIcon
              icon={faChevronCircleRight}
              onClick={() => router.push(`/category/${data?.href}`)}
            />
          </div>

          <div className="d-flex flex-wrap">
            {data?.news && data?.news?.length > 0
              ? data?.news.slice(0, 5).map((datum, index) => {
                  return datum.highligted ? (
                    <div
                      className="topNews d-flex flex-wrap col-12"
                      key={index}
                    >
                      <div className="imageDiv img-fluid col-lg-6 col-12">
                        <img alt="image" src={datum?.img} />
                      </div>
                      <div className="descriptionDiv d-flex flex-column col-lg-6 col-12">
                        <a href={`detailnews/${datum?.slug}`}>
                          <span className="title">{datum?.title}</span>
                        </a>
                        <p>{datum?.desc}</p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="normalNewsMain d-flex col-lg-6 col-12"
                      key={index}
                    >
                      <div className="imageDiv col-lg-3 col-4">
                        <img alt="image" src={datum?.img} />
                      </div>
                      <div className="descriptionDiv col-lg-9 col-8">
                        <a href={`detailnews/${datum?.slug}`}>
                          <span className="title">{datum?.title}</span>
                        </a>
                      </div>
                    </div>
                  );
                })
              : ""}

            <FullWidthAdvertisement
              img={
                "https://www.onlinekhabar.com/wp-content/uploads/2022/11/wai-wai-Quick-pyro-duck_turkey_900x100.png"
              }
              href="https://www.chaudharygroup.com/"
              widthSize="full"
            />
          </div>
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
      </div>
    </div>
  );
};
export default NewsByCategory;
