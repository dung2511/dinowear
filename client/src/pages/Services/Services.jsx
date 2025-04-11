import React from "react";

const Services = () => {
  return (
    <>
      <section className="banner-service py-4 bg-[rgba(28,75,130,0.20)]">
        <div className="container">
          <div className="flex flex-wrap -mx-2 items-center">
            <div className="w-full lg:w-1/2 px-2 mt-4 lg:mt-0 order-last lg:order-first">
              <h2 className="title font-bold text-[#000] 2xl:text-[2.5rem] xl:text-[1.875rem] text-[1.25rem] mb-2">
                Dịch vụ của <span className="text-[#1C4B82]">JobLaw</span> giành
                cho các nhà tuyển dụng
              </h2>
              <div className="short_content text-[#000] xl:mb-8 mb-4">
                Đến với các gói dịch vụ mà Joblaw cung cấp, giúp các nhà tuyển
                dụng dễ dàng tìm được các ứng viên tiềm năng và phù hợp với yêu
                cầu
              </div>
              <a href="#" title="Khám phá ngay" className="btn btn-orange">
                Khám phá ngay
              </a>
            </div>
            <div className="w-full lg:w-1/2 px-2 flex justify-center">
              <img src="theme/frontend/images/img-service.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="xl:py-10 py-6 hidden">
        <div className="container">
          <div className="head-title-all leading-[1.3] uppercase mb-3 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
            <span className="text-[var(--cl-blue)]">Xem hồ sơ ứng viên</span>
          </div>
          <div className="short_content text-[0.875rem] text-[#7d7d7d] mb-6">
            Cho phép nhà tuyển dụng có thể xem thông tin liên lạc mà các ứng
            viên đã chia sẻ
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="view-candidate-profile h-full border border-solid border-[#A8A8A8] rounded-lg xl:p-6 p-4">
                <div className="image c-img pt-[23%] mb-4">
                  <img
                    src="theme/frontend/images/img-view-profile.jpg"
                    alt=""
                  />
                </div>
                <p className="title font-bold text-[#000] text-center 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-2">
                  Ứng viên tốt nghiệp/Thực tập
                </p>
                <p className="text-center 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="price text-[#1C4B82] font-bold">
                    17.000đ
                  </span>
                  / hồ sơ cho cấp bậc nà
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="view-candidate-profile h-full border border-solid border-[#A8A8A8] rounded-lg xl:p-6 p-4">
                <div className="image c-img pt-[23%] mb-4">
                  <img
                    src="theme/frontend/images/img-view-profile-2.jpg"
                    alt=""
                  />
                </div>
                <p className="title font-bold text-[#000] text-center 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] mb-2">
                  Ứng viên tù cấp nhân viên trở lên
                </p>
                <p className="text-center 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                  <span className="price text-[#1C4B82] font-bold">
                    27.000đ
                  </span>
                  / hồ sơ cho cấp bậc nà
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recruitment-postings xl:py-10 py-6">
        <div className="container">
          <div className="head-title-all leading-[1.3] uppercase mb-6 border-l-[5px] border-solid border-[#DD6B4D] pl-4 font-bold 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
            <span className="text-[var(--cl-blue)]">Tin đăng tuyển dụng</span>
          </div>
        </div>
        <div className="bg-[#1C4B82] xl:py-8 py-4 mb-6">
          <div className="container flex items-center justify-center text-white 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
            <span
              className="icon w-10 h-10 inline-block bg-no-repeat bg-contain mr-2"
              style={{
                backgroundImage: "url(theme/frontend/images/icon-free.png)",
              }}
            ></span>
            Tin đăng cơ bản được miễn phí trong 30 ngày
          </div>
        </div>
        <div className="container">
          <div className="postings-content xl:mb-10 mb-6 last:mb-0">
            <div className="head flex items-center font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] xl:mb-6 mb-4">
              <span>Đăng tin trang chủ</span>
              <span
                className="icon w-6 h-6 bg-no-repeat bg-contain shrink-0 ml-2"
                style={{ backgroundImage: "url(uploads/demo/home.png)" }}
              ></span>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4">
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/vieclamtotnhat.png"
                      data-src="uploads/demo/vieclamtotnhat.png"
                      title="Việc làm tốt nhất"
                      alt="Việc làm tốt nhất"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Việc làm tốt nhất
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Tin tuyển dụng của bạn sẽ xuất hiện nằm trong box
                      <strong>“Việc làm tốt nhất”</strong> ở vị trí đầu trang
                      chủ
                    </p>
                  </div>
                  <div className="flex items-center mb-4 justify-center">
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Tin
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center flex-1 max-w-[100px] py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                    </div>
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        onchange="CUSTOM_CART.handleDataCart();"
                        __input_number_day__=""
                        placeholder=""
                        className="form-control text-center max-w-[100px] 2xl:max-w-[100px] flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded mr-2"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tuần
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">1,080,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      __button_add_cart__=""
                      onclick="CUSTOM_CART.addProductToCart(this);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      __button_remove_cart__=""
                      onclick="CUSTOM_CART.removeProductToCart(this);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div
                  className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4"
                  __item_product__=""
                  data-id="18"
                  data-price="980000"
                >
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/congtynoibat.png"
                      data-src="uploads/demo/congtynoibat.png"
                      title="Công ty nổi bật"
                      alt="Công ty nổi bật"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Công ty nổi bật
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Công ty tuyển dụng sẽ xuất hiện nằm trong box
                      <strong>“Công ty nổi bật”</strong> ở trang chủ
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="item flex items-center justify-center xl:mr-6 mr-4 last:mr-0 flex-1">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian hiển thị
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center mr-2 max-w-[125px] flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tháng
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">980,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      __button_add_cart__=""
                      onclick="CUSTOM_CART.addProductToCart(this);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      __button_remove_cart__=""
                      onclick="CUSTOM_CART.removeProductToCart(this);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div
                  className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4"
                  __item_product__=""
                  data-id="19"
                  data-price="780000"
                >
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/cacnhatuyendung.png"
                      data-src="uploads/demo/cacnhatuyendung.png"
                      title="Các nhà tuyển dụng"
                      alt="Các nhà tuyển dụng"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Các nhà tuyển dụng
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Thông tin công ty của bạn sẽ xuất hiện nằm trong box
                      <strong>“Các nhà tuyển dụng”</strong> ở trang chủ
                    </p>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="item flex items-center justify-center xl:mr-6 mr-4 last:mr-0 flex-1">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian hiển thị
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        max="100"
                        className="form-control text-center mr-2 max-w-[125px]  flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tháng
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">780,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      __button_add_cart__=""
                      onclick="CUSTOM_CART.addProductToCart(this);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      __button_remove_cart__=""
                      onclick="CUSTOM_CART.removeProductToCart(this);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postings-content xl:mb-10 mb-6 last:mb-0">
            <div className="head flex items-center font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] xl:mb-6 mb-4">
              <span>Nổi bật, chú ý</span>
              <span
                className="icon w-6 h-6 bg-no-repeat bg-contain shrink-0 ml-2"
                style={{ backgroundImage: "url(uploads/demo/icon-star.png)" }}
              ></span>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div
                  className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4"
                  __item_product__=""
                  data-id="20"
                  data-price="1080000"
                >
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/hieuungtinnoibat.png"
                      data-src="uploads/demo/hieuungtinnoibat.png"
                      title="Nổi bật tin"
                      alt="Nổi bật tin"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Nổi bật tin
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Tin được làm hiệu ứng nổi bật hơn trên các khu vực hiển
                      thị tin
                    </p>
                  </div>
                  <div className="flex items-center mb-4 justify-center">
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Tin
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center flex-1 max-w-[100px] py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                    </div>
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        onchange="CUSTOM_CART.handleDataCart();"
                        __input_number_day__=""
                        placeholder=""
                        className="form-control max-w-[90px] text-center max-w-[100px] 2xl:max-w-[100px] flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded mr-2"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tuần
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">1,080,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      __button_add_cart__=""
                      onclick="CUSTOM_CART.addProductToCart(this);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      __button_remove_cart__=""
                      onclick="CUSTOM_CART.removeProductToCart(this);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div
                  className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4"
                  __item_product__=""
                  data-id="21"
                  data-price="1080000"
                >
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/tintukhoa.png"
                      data-src="uploads/demo/tintukhoa.png"
                      title="Thêm từ  [Tuyển gấp]"
                      alt="Thêm từ  [Tuyển gấp]"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Thêm từ [Tuyển gấp]
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Tin đăng được đính kèm Tag “Tuyển gấp” trên tấy cả các khu
                      vực hiển thị tin
                    </p>
                  </div>
                  <div className="flex items-center mb-4 justify-center">
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Tin
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center flex-1 max-w-[100px] py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                    </div>
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        onchange="CUSTOM_CART.handleDataCart();"
                        __input_number_day__=""
                        placeholder=""
                        className="form-control max-w-[90px] text-center max-w-[100px] 2xl:max-w-[100px] flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded mr-2"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tuần
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">1,080,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      __button_add_cart__=""
                      onclick="CUSTOM_CART.addProductToCart(this);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      __button_remove_cart__=""
                      onclick="CUSTOM_CART.removeProductToCart(this);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postings-content xl:mb-10 mb-6 last:mb-0">
            <div className="head flex items-center font-medium text-[#000] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem] xl:mb-6 mb-4">
              <span>Đăng tin cơ bản</span>
              <span
                className="icon w-6 h-6 bg-no-repeat bg-contain shrink-0 ml-2"
                style={{ backgroundImage: "url(admin/images/noimage.png)" }}
              ></span>
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
                <div
                  className="item-recruitment-posting h-full border border-solid border-[#A8A8A8] rounded-lg 2xl:p-6 p-4"
                  __item_product__=""
                  data-id="22"
                  data-price="50000"
                >
                  <div className="image c-img pt-[38%] mb-4">
                    <img
                      loading="lazy"
                      src="uploads/demo/dangtincoban.png"
                      title="Đăng tin cơ bản"
                      alt="Đăng tin cơ bản"
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="title mb-4 font-bold text-center text-[#1C4B82] 2xl:text-[1.5rem] xl:text-[1.25rem] text-[1rem]">
                    Đăng tin cơ bản
                  </h3>
                  <div className="short_content text-center xl:text-[0.875rem] mb-4 text-[#000]">
                    <p>
                      Tin của bạn sẽ được hiển thị trên website ở phần tuyển
                      dụng
                    </p>
                  </div>
                  <div className="flex items-center mb-4 justify-center">
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Tin
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center flex-1 max-w-[100px] py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded"
                      />
                    </div>
                    <div className="item flex items-center xl:mr-4 mr-4 last:mr-0">
                      <span className="text lg:text-[0.875rem] shrink-0 mr-2">
                        Thời gian
                      </span>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        className="form-control text-center max-w-[100px] 2xl:max-w-[100px] flex-1 py-2 px-4 border border-solid border-[#A8A8A8] bg-white rounded mr-2"
                      />
                      <strong className="text lg:text-[0.875rem] shrink-0">
                        Tháng
                      </strong>
                    </div>
                  </div>
                  <div className="form-price text-center text-[0.875rem] 2xl:mb-8 mb-4">
                    <span className="price font-bold text-[#000]">
                      Giá: <span __element_item_total__="">50,000 đ</span>
                    </span>
                    <span className="text text-[#7d7d7d]">
                      (Đã bao gồm VAT)
                    </span>
                  </div>
                  <div className="form-button flex items-center justify-center">
                    <a
                      href="javascript:void(0);"
                      title="Chọn dịch vụ"
                      className="btn btn-border__orange rounded mr-4 last:mr-0"
                    >
                      Chọn dịch vụ
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="hidden added text-[#DD6B4D] font-bold mr-4 last:mr-0"
                    >
                      Bỏ thêm <i className="fa-solid fa-check ml-2"></i>
                    </a>
                    <a
                      href="javascript:void(0);"
                      title="Mua ngay"
                      className="btn btn-orange mr-4 rounded last:mr-0"
                    >
                      Mua ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="total-payment border-t-[1px] border-solid border-[#474747] py-4 xl:mt-16 mt-6">
          <div className="container flex items-center justify-end">
            <p className="text text-[.875rem] lg:mr-8 mr-4">
              <span className="text-[#000] font-medium">Tổng cộng</span>
              <span className="text-[#000] font-semibold" __element_total__="">
                0
              </span>
              <span className="text-[#7d7d7d]">(Đã bao gồm VAT)</span>
            </p>
            <a
              href="javascript:void(0);"
              title="Thanh toán"
              onclick="CUSTOM_CART.submitAddCart(this);"
              __button_payment_cart__=""
              className="btn lg:py-4 lg:px-6 py-2 px-4 bg-[#1C4B82] text-white rounded hover:bg-[#DD6B4D] hover:text-white"
            >
              Thanh toán
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
