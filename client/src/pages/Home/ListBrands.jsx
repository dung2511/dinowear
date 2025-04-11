import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { listBrands } from "../../API/dataHome";
const ListBrands = () => {
  return (
    <div className="section_brands py-6">
      <div className="container">
        <Swiper
          slidesPerView={3}
          spaceBetween={1.2}
          watchSlidesProgress={true}
          speed={600}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="slide-company"
        >
          {listBrands &&
            listBrands.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="item-company h-full bg-black items-center p-4 rounded-[0.75rem] border border-solid border-[#dee0e2] flex flex-col transition-all duration-500 hover:border-[#33c172] hover:shadow-[0_10px_30px_rgba(14,166,59,.2)]">
                    <img
                      loading="lazy"
                      src={item.image}
                      alt={item.name}
                      title={item.name}
                      className="img-fluid object-contain w-[6.5rem] h-[6.5rem]"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default ListBrands;
