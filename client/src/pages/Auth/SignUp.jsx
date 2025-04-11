import React, { useState } from "react";
import PageMeta from "../Admin/components/common/PageMeta";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import { toast } from "react-toastify";
import UserAPI from "../../API/UserAPI";
const SignUp = () => {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const params = {
        fullname,
        phone,
        email,
        password,
        confirmPassword,
      };
      const response = await UserAPI.registerUser(params);
      toast.success(response.msg, {
        position: "top-right",
      });
      setTimeout(() => {
        navigate("/dang-nhap");
      }, 500);
    } catch (error) {
      toast.error(error.response?.data?.msg, { position: "top-right" });
    } finally {
      console.log("End");
    }
  };
  return (
    <>
      <PageMeta
        title="DinoWear - Đăng nhập"
        description="Khám phá bộ sưu tập thời trang cực chất tại DinoWear! Đa dạng phong cách từ streetwear đến basic, mang đến sự thoải mái và cá tính riêng. Cập nhật xu hướng mới nhất, chất liệu cao cấp, giá cả hợp lý. Shop ngay hôm nay! "
      />
      <section className="my-20">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <Link
            to="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img src={Logo} alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="fullname"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Họ tên
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    id="fullname"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    placeholder="Nguyễn Văn A"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    placeholder="0983 *** 404"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mật khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm_password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="confirm_password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  className="w-full bg-[#000000] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Đăng ký
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/dang-nhap"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUp;
