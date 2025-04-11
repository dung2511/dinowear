import React from "react";

const Contact = () => {
  return (
    <section className="section-contact 2xl:py-20 lg:py-10 py-6">
      <div className="container">
        <h2 className="text-[#000] text-center font-semibold 2xl:text-[1.5rem] text-[1.25rem] lg:mb-8 mb-6">
          Thông tin liên hệ
        </h2>
        <form
          action="https://joblaw.vn/gui-lien-he"
          method="POST"
          className="form-contact form form-validate max-w-[1080px] mx-auto"
        >
          <div className=" rounded border border-solid border-[#A8A8A8] py-5 lg:px-10 px-5">
            <p className="text-[#1C4B82] font-bold text-[1.125rem] mb-3">Joblaw</p>
            <p className="address mb-3">
              Nhà liền kề số 14 - Manor 1 Str Sunrise A – Khu đô thị The Manor
              Central Park đường Nguyễn Xiển, Phường Đại Kim, Quận Hoàng Mai,
              Thành phố Hà Nội, Việt Nam
            </p>
            <p className="hotline mb-3">Điện thoại: 091.121.9099 </p>
            <select
              name="type"
              id=""
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
            >
              <option value="Nhà tuyển dụng" selected="">
                Nhà tuyển dụng
              </option>
              <option value="Người lao động">Người lao động</option>
            </select>
            <input
              type="text"
              name="name"
              aria-required="true"
              rules="required"
              placeholder="Tên"
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
            />
            <input
              type="text"
              name="address"
              aria-required="true"
              rules="required"
              placeholder="Địa chỉ"
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
            />
            <input
              type="tel"
              name="phone"
              aria-required="true"
              rules="required"
              placeholder="Số điện thoại"
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
            />
            <input
              type="email"
              name="email"
              aria-required="true"
              rules="required"
              placeholder="Email"
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
            />
            <textarea
              name="content"
              className="w-full rounded p-2 border-[#A8A8A8] mb-4"
              placeholder="Nhập nội dung cần liên hệ"
              rows="5"
            ></textarea>
          </div>
          <div className="text-center mt-8">
            <button className="btn inline-flex py-4 px-6 rounded bg-[#DD6B4D] hover:bg-[#ff8768] text-white font-bold border-none outline-none !hover:border-none">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <g clip-path="url(#clip0_2283_11305)">
                  <path
                    d="M15.8542 0.145173C15.9234 0.214505 15.9707 0.302647 15.9903 0.398651C16.0098 0.494654 16.0008 0.594287 15.9642 0.685173L10.1452 15.2322C10.0939 15.3603 10.0083 15.4718 9.89771 15.5543C9.78715 15.6369 9.65596 15.6874 9.51856 15.7002C9.38116 15.713 9.2429 15.6877 9.11897 15.627C8.99505 15.5663 8.89027 15.4726 8.81618 15.3562L5.63818 10.3612L0.643176 7.18317C0.526494 7.10916 0.432527 7.00434 0.371646 6.8803C0.310764 6.75626 0.285334 6.61781 0.298161 6.48023C0.310988 6.34264 0.361574 6.21128 0.444337 6.10063C0.5271 5.98998 0.638822 5.90434 0.767176 5.85317L15.3142 0.0361732C15.4051 -0.000414535 15.5047 -0.00949426 15.6007 0.0100619C15.6967 0.0296181 15.7848 0.0769483 15.8542 0.146173V0.145173ZM6.63618 10.0692L9.39718 14.4072L14.1302 2.57517L6.63618 10.0692ZM13.4232 1.86817L1.59118 6.60117L5.93018 9.36117L13.4232 1.86817Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_2283_11305">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              Gửi liên lạc
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
