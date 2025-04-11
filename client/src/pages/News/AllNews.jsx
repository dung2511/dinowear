import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewsAPI from "../../API/NewsAPI";
import { formatDate } from "../../utils/format";
const AllNews = () => {
  const [listNews, setListNews] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await NewsAPI.getNewsHome();
      setListNews(response);
    };
    fetchData();
  }, []);
  return (
    <section className="section-news my-10">
      <div className="container">
        <h2 className="text-center uppercase text-[1.25rem] lg:text-[2rem] font-semibold mb-7">
          Tin tức
        </h2>
        <div className="flex flex-wrap md:-mx-3">
          {listNews &&
            listNews.map((item) => {
              return (
                <div
                  className="w-full mb-6 lg:mb-0 md:px-3 md:w-1/2 lg:w-1/4"
                  key={item._id}
                >
                  <div className="blog-post">
                    <div className="blog-post-image">
                      <Link
                        to={"/tin-tuc/" + item.slug}
                        className="c-img pt-[66%]"
                      >
                        <img
                          loading="lazy"
                          src={item.image}
                          data-src={item.image}
                          alt={item.name}
                          title={item.name}
                        />
                      </Link>
                    </div>
                    <div className="blog-post-content mt-2">
                      <h3 className="blog-title">
                        <Link
                          to={"/tin-tuc/" + item.slug}
                          className="font-semibold line-clamp-2"
                          title={item.name}
                        >
                          {item.name}
                        </Link>
                      </h3>
                      <div className="text-[#9d9d9d] mt-2 text-sm">
                        {formatDate(item.createdAt)}
                      </div>
                      <div className="text-[#474343] mt-2 text-sm">
                        {item.short_content}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AllNews;
