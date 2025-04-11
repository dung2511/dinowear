import React, { useEffect } from "react";
import PageMeta from "../Admin/components/common/PageMeta";
import ChevronRight from "../Checkout/Icon/ChevronRight";
import { Link, useLocation, useNavigate } from "react-router-dom";
import imageSuccess from "../../assets/images/image-success.png";
const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!location.state?.orderCompleted) {
  //     navigate("/");
  //   }
  // }, [location, navigate]);
  return (
    <>
      <PageMeta title="DinoWear - Đặt hàng thành công" />
      <section className="bg-[#F6F6F6] py-16">
        <div className="container">
          <ol className="items-center mx-auto flex w-full max-w-[50rem] text-center text-[1.25rem] font-medium mb-16">
            <li className="flex items-center text-[#313131] md:w-full">
              <span className="flex items-center ">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Giỏ hàng
              </span>
              <ChevronRight />
            </li>

            <li className="flex items-center text-[#313131] md:w-full">
              <span className="flex items-center ">
                <svg
                  className="me-2 h-6 w-6"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Thanh toán
              </span>
              <ChevronRight />
            </li>

            <li className="flex shrink-0 items-center text-[#313131]">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Hoàn tất đơn hàng
            </li>
          </ol>
          <div className="flex justify-center">
            <img src={imageSuccess} alt="DinoWear" title="DinoWear" />
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/"} className="btn-back-to-home">
              Trở về trang chủ
              <span></span>
            </Link>
            <Link to={"/san-pham"} className="btn-continue-shopping">
              Tiếp tục mua hàng
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Success;
