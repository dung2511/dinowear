import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SidebarUser = () => {
  const location = useLocation();

  return (
    <>
      <aside className="lg:w-[17.5rem] sidebar-account bg-[#ffffff] rounded-[0.625rem] fixed lg:static">
        <div className="info-management xl:py-6 py-5 text-[#323232]">
          <ul>
            <li className="flex border-b border-solid border-[#8B4513]  mb-6">
              <NavLink
                to={"/thong-tin-tai-khoan"}
                className="flex items-center py-2 px-4 w-full"
                title="Thông tin tài khoản"
              >
                <span className="mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.3163 19.4384C5.92462 18.0052 7.34492 17 9 17H15C16.6551 17 18.0754 18.0052 18.6837 19.4384M16 9.5C16 11.7091 14.2091 13.5 12 13.5C9.79086 13.5 8 11.7091 8 9.5C8 7.29086 9.79086 5.5 12 5.5C14.2091 5.5 16 7.29086 16 9.5ZM22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke={
                        location.pathname === "/thong-tin-tai-khoan"
                          ? "white"
                          : "#323232"
                      }
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Thông tin tài khoản
              </NavLink>
            </li>
            <li className="flex border-b border-solid border-[#8B4513]  mb-6">
              <NavLink
                to={"/quan-ly-don-hang"}
                className="flex items-center py-2 px-4 w-full"
                title="Quản lý đơn hàng"
              >
                <span className="mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.0004 9V6C16.0004 3.79086 14.2095 2 12.0004 2C9.79123 2 8.00037 3.79086 8.00037 6V9M3.59237 10.352L2.99237 16.752C2.82178 18.5717 2.73648 19.4815 3.03842 20.1843C3.30367 20.8016 3.76849 21.3121 4.35839 21.6338C5.0299 22 5.94374 22 7.77142 22H16.2293C18.057 22 18.9708 22 19.6423 21.6338C20.2322 21.3121 20.6971 20.8016 20.9623 20.1843C21.2643 19.4815 21.179 18.5717 21.0084 16.752L20.4084 10.352C20.2643 8.81535 20.1923 8.04704 19.8467 7.46616C19.5424 6.95458 19.0927 6.54511 18.555 6.28984C17.9444 6 17.1727 6 15.6293 6L8.37142 6C6.82806 6 6.05638 6 5.44579 6.28984C4.90803 6.54511 4.45838 6.95458 4.15403 7.46616C3.80846 8.04704 3.73643 8.81534 3.59237 10.352Z"
                      stroke={
                        location.pathname === "/quan-ly-don-hang" ||
                        location.pathname.startsWith("/quan-ly-don-hang/")
                          ? "white"
                          : "#323232"
                      }
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Quản lý đơn hàng
              </NavLink>
            </li>
            <li className="flex border-b border-solid border-[#8B4513]  mb-6">
              <NavLink
                to={"/dia-chi-giao-hang"}
                className="flex items-center py-2 px-4 w-full"
                title="Địa chỉ giao hàng"
              >
                <span className="mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 16V6.2C16 5.0799 16 4.51984 15.782 4.09202C15.5903 3.71569 15.2843 3.40973 14.908 3.21799C14.4802 3 13.9201 3 12.8 3H5.2C4.0799 3 3.51984 3 3.09202 3.21799C2.71569 3.40973 2.40973 3.71569 2.21799 4.09202C2 4.51984 2 5.0799 2 6.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.0799 16 5.2 16H16ZM16 16H20.4C20.9601 16 21.2401 16 21.454 15.891C21.6422 15.7951 21.7951 15.6422 21.891 15.454C22 15.2401 22 14.9601 22 14.4V11.6627C22 11.4182 22 11.2959 21.9724 11.1808C21.9479 11.0787 21.9075 10.9812 21.8526 10.8917C21.7908 10.7908 21.7043 10.7043 21.5314 10.5314L19.4686 8.46863C19.2957 8.29568 19.2092 8.2092 19.1083 8.14736C19.0188 8.09253 18.9213 8.05213 18.8192 8.02763C18.7041 8 18.5818 8 18.3373 8H16M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5ZM20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z"
                      stroke={
                        location.pathname === "/dia-chi-giao-hang"
                          ? "white"
                          : "#323232"
                      }
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                Địa chỉ giao hàng
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className="over-lay-sidebar fixed lg:hidden w-full h-full z-50 block top-0 right-[-100%] bg-[rgba(0,0,0,.6)] transition-all duration-300"></div>
      <span className="show-sidebar flex items-center justify-center w-10 h-10 rounded-tl-lg rounded-bl-lg bg-white shadow-[0_4px_10px_rgba(0,0,0,.3)] text-[#F44336] fixed top-[20%] right-0 z-10">
        <i className="fa-solid fa-gear"></i>
      </span>
    </>
  );
};

export default SidebarUser;
