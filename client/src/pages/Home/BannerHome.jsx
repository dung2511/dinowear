import React from "react";
import ImageBanner from "../../assets/images/banner_desktop.png";
import { Link } from "react-router-dom";
import { listStats } from "../../API/dataHome";
const BannerHome = () => {
  return (
    <div className="section-banner__home bg-[#F2F0F1]">
      <div className="container">
        <div className="flex items-center flex-wrap">
          <div className="w-full lg:w-1/2 lg:py-20 xl:py-24 mb-8">
            <h2 className="font-bold lg:text-[3rem]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h2>
            <p className="text-[rgba(0,0,0,0.6)] mb-8">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link
              to={"/product"}
              className="py-4 mb-10 inline-block bg-black text-white px-16 rounded-[3.875rem]"
            >
              Shop Now
            </Link>
            <div className="flex">
              {listStats.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="item-stat first:pl-0 last:pr-0 px-8 border-r border-solid border-[rgba(0,0,0,0.1)] last:border-none"
                  >
                    <p className="font-bold text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem]">
                      {item.number.toLocaleString("en-US")}+
                    </p>
                    <p className="text-[rgba(0,0,0,0.6)]">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <img src={ImageBanner} alt="Banner" title="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
