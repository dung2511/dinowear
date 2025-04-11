import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewsAPI from "../../API/NewsAPI";
import { formatDate } from "../../utils/format";

const NewsDetail = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await NewsAPI.getDetail(slug);
      setDetail(response);
    };
    const fetchDataAllNews = async () => {
      const response = await NewsAPI.getNewsHome();
      setListNews(response);
    };
    fetchDataAllNews();
    fetchData();
  }, [slug]);
  const [listNews, setListNews] = useState([]);
  return (
    <section className="lg:py-10 py-6">
      <div className="container flex flex-wrap lg:-mx-2">
        <div className="lg:w-3/4 lg:px-2">
          <h1 className="font-semibold text-2xl text-black mb-5">
            {detail.name}
          </h1>

          <div className="flex text-[var(--cl-sub-title]) mb-4">
            <div className="mr-2">
              <i className="fa-regular fa-calendar-days mr-2"></i>

              <span>{formatDate(detail.createdAt)}</span>
            </div>
          </div>
          <div
            className="s-content text-[var(--cl-sub-title]) mt-4"
            dangerouslySetInnerHTML={{ __html: detail.content }}
          ></div>
        </div>

        <div className="w-full px-2 lg:w-1/4">
          <div className="news-related mt-10">
            <p className="title cl-gradient-green uppercase font-bold text-[1.125rem] mb-4 text-center">
              Liên quan
            </p>
            {listNews &&
              listNews.map((item) => {
                return (
                  <div className="item-news-sidebar items-stretch flex mb-4 -mx-2">
                    <div className="w-1/3 px-2">
                      <Link
                        className="c-img pt-[83%]"
                        to={"/tin-tuc/" + item.slug}
                        title={item.name}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                        />
                      </Link>
                    </div>
                    <div className="w-2/3 px-2">
                      <Link
                        to={"/tin-tuc/" + item.slug}
                        title={item.name}
                        className="font-semibold line-clamp-3 transition-all duration-500 hover:text-[var(--cl-text-title)]"
                      >
                        {item.name}
                      </Link>
                      <div className="mt-auto">
                        <p className="flex items-center">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M20.8933 1.41016H18.7757V3.5278C18.7757 3.95133 18.4227 4.23369 18.0698 4.23369C17.7168 4.23369 17.3639 3.95133 17.3639 3.5278V1.41016H6.06978V3.5278C6.06978 3.95133 5.71684 4.23369 5.3639 4.23369C5.01096 4.23369 4.65802 3.95133 4.65802 3.5278V1.41016H2.54037C1.48155 1.41016 0.705078 2.3278 0.705078 3.5278V6.06898H23.2933V3.5278C23.2933 2.3278 22.0227 1.41016 20.8933 1.41016ZM0.705078 7.55133V20.469C0.705078 21.7396 1.48155 22.5866 2.61096 22.5866H20.9639C22.0933 22.5866 23.3639 21.669 23.3639 20.469V7.55133H0.705078ZM6.98743 19.4102H5.29331C5.01096 19.4102 4.72861 19.1984 4.72861 18.8455V17.0807C4.72861 16.7984 4.94037 16.516 5.29331 16.516H7.05802C7.34037 16.516 7.62273 16.7278 7.62273 17.0807V18.8455C7.55214 19.1984 7.34037 19.4102 6.98743 19.4102ZM6.98743 13.0572H5.29331C5.01096 13.0572 4.72861 12.8455 4.72861 12.4925V10.7278C4.72861 10.4454 4.94037 10.1631 5.29331 10.1631H7.05802C7.34037 10.1631 7.62273 10.3749 7.62273 10.7278V12.4925C7.55214 12.8455 7.34037 13.0572 6.98743 13.0572ZM12.6345 19.4102H10.8698C10.5874 19.4102 10.3051 19.1984 10.3051 18.8455V17.0807C10.3051 16.7984 10.5168 16.516 10.8698 16.516H12.6345C12.9168 16.516 13.1992 16.7278 13.1992 17.0807V18.8455C13.1992 19.1984 12.9874 19.4102 12.6345 19.4102ZM12.6345 13.0572H10.8698C10.5874 13.0572 10.3051 12.8455 10.3051 12.4925V10.7278C10.3051 10.4454 10.5168 10.1631 10.8698 10.1631H12.6345C12.9168 10.1631 13.1992 10.3749 13.1992 10.7278V12.4925C13.1992 12.8455 12.9874 13.0572 12.6345 13.0572ZM18.2815 19.4102H16.5168C16.2345 19.4102 15.9521 19.1984 15.9521 18.8455V17.0807C15.9521 16.7984 16.1639 16.516 16.5168 16.516H18.2815C18.5639 16.516 18.8463 16.7278 18.8463 17.0807V18.8455C18.8463 19.1984 18.6345 19.4102 18.2815 19.4102ZM18.2815 13.0572H16.5168C16.2345 13.0572 15.9521 12.8455 15.9521 12.4925V10.7278C15.9521 10.4454 16.1639 10.1631 16.5168 10.1631H18.2815C18.5639 10.1631 18.8463 10.3749 18.8463 10.7278V12.4925C18.8463 12.8455 18.6345 13.0572 18.2815 13.0572Z"
                              fill="#007020"
                              fill-opacity="0.45"
                            ></path>
                          </svg>
                          <span className="text-sm">31/03/2025</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsDetail;
