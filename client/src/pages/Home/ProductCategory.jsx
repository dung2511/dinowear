import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ProductCategoryAPI from "../../API/ProductCategoryAPI";
const ProductCategory = () => {
  const [listCategory, setListCategory] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await ProductCategoryAPI.getCategoryHome();
      setListCategory(response);
    };
    fetchData();
  }, []);
  return (
    <section className="product__category_home mt-16">
      <div className="container">
        <h2 className="text-center uppercase text-[1.25rem] lg:text-[2rem] font-semibold mb-7">
          Danh mục sản phẩm
        </h2>
        <div>
          <Swiper
            pagination={{ clickable: true }}
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
            modules={[Pagination]}
            className="slide-company"
          >
            {listCategory &&
              listCategory.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="relative block">
                      <Link
                        to={"/collections/" + item.slug}
                        className="c-img  pt-[150%]"
                      >
                        <img
                          loading="lazy"
                          src={item.image}
                          alt={item.name}
                          title={item.name}
                          className="img-fluid"
                        />
                      </Link>
                      <div className="category-info absolute left-0 right-0 bottom-0 px-5 py-4 flex justify-between items-center bg-[rgba(255,255,255,0.45)]">
                        <div className="info-title">
                          <h3 className="font-medium text-[1.25rem]">
                            <Link
                              to={"/collections/" + item.slug}
                              title={item.name}
                            >
                              {item.name}
                            </Link>
                          </h3>
                        </div>
                        <div className="info-icon w-11 h-11 flex items-center justify-center bg-white rounded-full ml-2.5 transition-all flex-[0_0_44]">
                          <Link
                            to={"/collections/" + item.slug}
                            title={item.name}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                            >
                              <g>
                                <path
                                  xmlns="http://www.w3.org/2000/svg"
                                  d="m4 13c-.26901 0-.50292-.0994-.70175-.2982-.19883-.1989-.29825-.4328-.29825-.7018 0-.2807.09942-.5146.29825-.7018.19883-.1988.43274-.2982.70175-.2982h16c.2807 0 .5146.0994.7018.2982.1988.1872.2982.4211.2982.7018 0 .269-.0994.5029-.2982.7018-.1872.1988-.4211.2982-.7018.2982zm9.7018 6.7018c-.1755.1988-.4094.2982-.7018.2982-.269 0-.5029-.0994-.7018-.2982-.1988-.1989-.2982-.4328-.2982-.7018 0-.2924.0994-.5263.2982-.7018l6.8948-6.8947c.0585-.0585.0994.0292.1228.2632.0234.2222.0234.4503 0 .6842-.0234.2222-.0643.3041-.1228.2456l-6.8948-6.89475c-.1988-.18713-.2982-.42105-.2982-.70175s.0994-.51462.2982-.70176c.1989-.19882.4328-.29824.7018-.29824.2924 0 .5263.09942.7018.29824l6.8947 6.89476c.2222.2105.3333.4795.3333.807 0 .3158-.1111.5848-.3333.807z"
                                ></path>
                              </g>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
