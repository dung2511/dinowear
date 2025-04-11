import React from "react";

import { listPolicy } from "../../API/dataHome";
const Policy = () => {
  return (
    <section className="section-home-policy mt-8 border-t border-b border-solid border-[#eee] py-10">
      <div className="container">
        <div className="flex flex-wrap">
          {listPolicy.map((item) => {
            return (
              <div className="w-1/2 lg:w-1/4" key={item.id}>
                <div className="policies-item items-center flex gap-4">
                  <div className="policies-image">
                    <img
                      src={item.image}
                      alt="policies_icon_1"
                      width="40"
                      height="40"
                      className="img-fluid"
                      loading="lazy"
                    />
                  </div>
                  <div className="policies-info">
                    <p className="policies-title font-semibold mb-1">
                      {item.title}
                    </p>
                    <div className="policies-desc text-[0.875rem] text-[#050000]">
                      {item.subTitle}
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

export default Policy;
