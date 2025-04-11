import React, { useEffect, useState } from "react";
import { formatPrice, formatPriceOrder } from "../../utils/format";
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from "../../Redux/Action/ActionCount";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ChevronRight from "./Icon/ChevronRight";
import LocationAPI from "../../API/LocationAPI";
import OrderAPI from "../../API/OrderAPI";
const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState("");
  const [district, setDistrict] = useState("");
  const [listDistrict, setListDistrict] = useState("");
  const [award, setAward] = useState("");
  const [listAward, setListAward] = useState("");
  const [address, setAddress] = useState("");
  const [isCheckedTerms, setIsCheckedTerms] = useState(false);
  const [isCheckedPayment, setIsCheckedPayment] = useState(true);
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("carts")));
    sumPrice(JSON.parse(localStorage.getItem("carts")), 0);
  }, []);
  useEffect(() => {
    const fetchDataCity = async () => {
      const response = await LocationAPI.getAllCity();
      setListCity(response);
    };
    fetchDataCity();
  }, []);
  useEffect(() => {
    const fetchDataDistrict = async () => {
      if (city) {
        const response = await LocationAPI.getDistricts(city);
        setListDistrict(response);
      }
    };
    fetchDataDistrict();
  }, [city]);
  useEffect(() => {
    const fetchDataAwards = async () => {
      if (city && district) {
        const response = await LocationAPI.getAwards(city, district);
        setListAward(response);
      }
    };
    fetchDataAwards();
  }, [district]);
  const sumPrice = (carts, sum) => {
    carts.map((value) => {
      return (sum += Number(value.quantity) * Number(value.price_product));
    });
    setTotalPrice(Number(sum));
  };
  const count_change = useSelector((state) => state.Count.isLoad);

  const dispatch = useDispatch();
  const handleCheckout = async (e) => {
    e.preventDefault();
    const data_carts = JSON.parse(localStorage.getItem("carts"));

    const data = {
      id_user: JSON.parse(localStorage.getItem("id_user")),
      fullname: fullname,
      phone: phone,
      email: email,
      shipping_address: {
        city_id: city,
        district_id: district,
        award_id: award,
        address: address,
      },
      list_product: data_carts,
      total_price: totalPrice,
    };
    await OrderAPI.post_detail_order(data);

    toast.success("Đặt hàng thành công", {
      position: "top-right",
    });
    localStorage.setItem("carts", JSON.stringify([]));
    const action_count_change = changeCount(count_change);
    dispatch(action_count_change);
    setTimeout(() => {
      navigate("/success", { state: { orderCompleted: true } });
    }, 500);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("carts")).length === 0) {
      return navigate("/");
    }
  }, [cart]);
  return (
    <section className="bg-[#F6F6F6] py-16 antialiased">
      <div className="container">
        <ol className="items-center mx-auto flex w-full max-w-[50rem] text-center text-[1.25rem] font-medium mb-16">
          <li className="flex items-center text-[#888] md:w-full">
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
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
            <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
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

          <li className="flex shrink-0 items-center text-[#888]">
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
        <form
          className="mx-auto max-w-screen-xl px-4 2xl:px-0"
          onSubmit={handleCheckout}
        >
          <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
            <div className="w-full lg:w-3/5">
              <div className="space-y-4">
                <h2 className="text-[1.5rem] font-semibold text-gray-900 dark:text-white">
                  Thông tin thanh toán
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Họ và tên <span className="text-[#ff0000] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      placeholder="Bonnie Green"
                      value={fullname}
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      placeholder="name@flowbite.com"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Số điện thoại
                      <span className="text-[#ff0000] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      placeholder="098 *** 3491"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-city-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Tỉnh/Thành phố
                        <span className="text-[#ff0000] ml-1">*</span>
                      </label>
                    </div>
                    <select
                      id="select-city-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      value={city || ""}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Chọn tỉnh / thành phố</option>
                      {listCity &&
                        listCity.map((value) => {
                          return (
                            <option key={value._id} value={value.code}>
                              {value.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-district-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Quận/Huyện
                        <span className="text-[#ff0000] ml-1">*</span>
                      </label>
                    </div>
                    <select
                      id="select-district-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      value={district || ""}
                      onChange={(e) => setDistrict(e.target.value)}
                    >
                      <option value="">Chọn quân / huyện</option>
                      {listDistrict &&
                        listDistrict.map((value) => {
                          return (
                            <option key={value.code} value={value.code}>
                              {value.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <label
                        htmlFor="select-ward-input-3"
                        className="block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Phường/Xã
                        <span className="text-[#ff0000] ml-1">*</span>
                      </label>
                    </div>
                    <select
                      id="select-ward-input-3"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 "
                      value={award}
                      onChange={(e) => setAward(e.target.value)}
                    >
                      <option value="">Chọn Xã / Phường</option>
                      {listAward &&
                        listAward.map((value) => {
                          return (
                            <option key={value.code} value={value.code}>
                              {value.name}
                            </option>
                          );
                        })}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="address_company"
                      className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Địa chỉ nhà riêng/Công ty{" "}
                      <span className="text-[#ff0000] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                      placeholder="Số 8 Đường Triều Khúc, Thanh Xuân, Hà Nội"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-2/5">
              <div className="bg-[#ffffff] p-6 border border-solid border-[#D6D6D6] overflow-hidden rounded-[0.625rem]">
                <h2 className="text-[1.5rem] font-semibold mb-6">
                  Đơn hàng của bạn
                </h2>
                <div className="flex justify-between mb-4">
                  <div className="w-[70%] font-semibold text-[1.125rem]">
                    Sản phẩm
                  </div>
                  <div className="w-[30%] font-semibold text-[1.125rem] text-right">
                    Tạm tính
                  </div>
                </div>
                <div className="list-item-cart  pb-2 border-b-2 border-solid border-[#D6D6D6] mb-4">
                  {cart &&
                    cart.map((value) => {
                      return (
                        <div
                          className="flex justify-between last:mb-0 mb-4"
                          key={value.id_cart}
                        >
                          <div className="w-[70%]">{value.name_product}</div>
                          <div className="w-[30%] text-right">
                            {formatPriceOrder(value.price_product)}
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <div className="text-[1.125rem] font-medium">
                      Vận chuyển
                    </div>
                    <div className="text-sm font-medium ">
                      Giao hàng miễn phí
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-[1.25rem] font-semibold ">Tổng</div>
                    <div className="text-[1.25rem] font-semibold ">
                      {formatPrice(totalPrice)}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-[1.5rem] font-semibold mb-6">
                    Phương thức thanh toán
                  </h3>
                  <div className="mb-8">
                    <div className="form-check mb-6">
                      <input
                        className="form-check-input mr-4"
                        type="radio"
                        name="payment"
                        id="cash_delivery"
                        checked={isCheckedPayment}
                        onChange={(e) => setIsCheckedPayment(e.target.checked)}
                      />
                      <label
                        className="form-check-label text-[#323232] font-bold"
                        htmlFor="cash_delivery"
                      >
                        Giao hàng và thu tiền tận nơi
                      </label>
                      <div className="text-[#848484] mt-2 pb-5 border-b border-solid border-[#D6D6D6]">
                        Quý khách thanh toán cho nhân viên giao hàng toàn bộ giá
                        trị đơn hàng đã mua (Lưu ý: Đơn hàng không đồng kiểm,
                        quay video quá trình mở hàng)
                      </div>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input mr-4"
                        type="checkbox"
                        id="terms"
                        checked={isCheckedTerms}
                        onChange={(e) => setIsCheckedTerms(e.target.checked)}
                      />
                      <label
                        className="form-check-label text-[#323232] font-bold"
                        htmlFor="terms"
                      >
                        Tôi đã đọc và đồng ý với điều khoản và điều kiện của
                        website *
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-[#000000] px-5 py-2.5 text-sm font-medium text-white "
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
