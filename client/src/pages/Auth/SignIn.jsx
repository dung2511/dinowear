import React, { useContext, useState } from "react";
import Logo from "../../assets/images/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import PageMeta from "../Admin/components/common/PageMeta";
import { toast } from "react-toastify";
import UserAPI from "../../API/UserAPI";
import { AuthContext } from "../../context/Auth";
const SignIn = () => {
  const { addLocal } = useContext(AuthContext);
  const navaigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = (e) => {
    e.preventDefault();
    login();
  };
  const login = async () => {
    try {
      const user = {
        email: email,
        password: password,
      };
      const response = await UserAPI.login(user);
      addLocal(response.jwt, response.id_user);
      toast.success(response.msg, {
        position: "top-right",
      });
      setTimeout(() => {
        navaigate("/");
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
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    Forgot password?
                  </Link>
                </div>
                <button
                  onClick={handleSignIn}
                  className="w-full bg-[#000000] text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Đăng nhập
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/dang-ky"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
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

export default SignIn;
