import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatPrice } from "../../utils/format";
import Decrement from "../Products/components/Decrement";
import Increment from "../Products/components/Increment";
import CartsLocal from "../../API/CartsLocal";
import { changeCount } from "../../Redux/Action/ActionCount";
import IconDelete from "./components/IconDelete";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ChevronRight from "../Checkout/Icon/ChevronRight";
import PageMeta from "../Admin/components/common/PageMeta";
const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [listCart, setListCart] = useState([]);
  const count_change = useSelector((state) => state.Count.isLoad);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setListCart(JSON.parse(localStorage.getItem("carts")));
    sumPrice(JSON.parse(localStorage.getItem("carts")), 0);
  }, [count_change]);

  const sumPrice = (carts, sum) => {
    carts.map((value) => {
      return (sum += parseInt(value.quantity) * parseInt(value.price_product));
    });
    setTotalPrice(sum);
  };
  const downQuantity = (quantity, id_cart) => {
    if (parseInt(quantity) === 1) {
      return;
    }
    const data = {
      id_cart: id_cart,
      quantity: parseInt(quantity) - 1,
    };
    CartsLocal.updateProduct(data);
    const action_change_count = changeCount(count_change);
    dispatch(action_change_count);
  };
  const upQuantity = (quantity, id_cart) => {
    const data = {
      id_cart: id_cart,
      quantity: parseInt(quantity) + 1,
    };
    CartsLocal.updateProduct(data);
    const action_change_count = changeCount(count_change);
    dispatch(action_change_count);
  };
  const handleDeleteCart = (id_cart) => {
    CartsLocal.deleteProduct(id_cart);
    toast.success("Xóa sản phẩm thành công", {
      position: "top-right",
    });
    const action_change_count = changeCount(count_change);
    dispatch(action_change_count);
  };
  const handleCheckout = () => {
    if (localStorage.getItem("id_user")) {
      if (listCart.length < 1) {
        toast.error("Vui Lòng Kiểm Tra Lại Giỏ Hàng!", {
          position: "top-right",
        });
      } else {
        navigate("/checkout");
      }
    } else {
      toast.error("Vui Lòng Kiểm Tra Tình Trạng Đăng Nhập!", {
        position: "top-right",
      });
    }
  };
  return (
    <>
      <PageMeta title="DinoWear - Giỏ hàng" />

      <section className="section-carts py-16">
        <div className="container">
          {listCart.length > 0 ? (
            <>
              <ol className="items-center mx-auto flex w-full max-w-[50rem] text-center text-[1.25rem] font-medium mb-16">
                <li className="flex items-center text-[#313131] md:w-full">
                  <span className="flex items-center">
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

                <li className="flex items-center text-[#888] md:w-full">
                  <span className="flex items-center">
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
              <h2 className="text-2xl font-bold mb-6 uppercase">
                Giỏ hàng của bạn
              </h2>

              <div className="flex flex-wrap lg:-mx-3">
                <div className="w-full lg:w-3/5 lg:px-3">
                  {listCart &&
                    listCart.map((item) => {
                      return (
                        <div
                          className="border border-solid border-[rgba(0,0,0,0.1)] rounded-[1.25rem] p-4 mb-4 flex items-stretch"
                          key={item.id_cart}
                        >
                          <div className="lg:w-[7.75rem] mr-4">
                            <img
                              src={item.image}
                              alt={item.name_product}
                              title={item.name_product}
                            />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <div className="flex justify-between items-center">
                              <Link
                                to={"/san-pham/" + item.slug_product}
                                className="font-bold text-[1.25rem] mb-3"
                              >
                                <h3>{item.name_product}</h3>
                              </Link>
                              <span
                                className="inline-block"
                                onClick={() => handleDeleteCart(item?.id_cart)}
                              >
                                <IconDelete />
                              </span>
                            </div>
                            <p className="mb-2">Size: {item.size}</p>
                            <p className="flex items-center">
                              Color:
                              <span
                                style={{ backgroundColor: item?.color }}
                                className="inline-block ml-2 w-5 h-5 rounded-full"
                              ></span>
                            </p>
                            <div className="flex items-center justify-between mt-auto">
                              <p className="font-bold flex items-center text-[1.15rem] xl:text-[1.25rem]">
                                {formatPrice(item?.price_product)}
                              </p>
                              <div className="quantity h-[3.25rem] flex items-center rounded-[2rem] bg-[#F0F0F0] py-3 px-5">
                                <button
                                  onClick={() =>
                                    downQuantity(item.quantity, item.id_cart)
                                  }
                                >
                                  <Decrement />
                                </button>
                                <input
                                  type="text"
                                  className="border-0 w-[5rem] bg-transparent text-center"
                                  value={item?.quantity}
                                />
                                <button
                                  onClick={() =>
                                    upQuantity(item.quantity, item.id_cart)
                                  }
                                >
                                  <Increment />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>

                <div className="w-full lg:w-2/5 lg:px-3">
                  <div className="border border-solid border-[rgba(0,0,0,0.1)] rounded-[1.25rem] p-4">
                    <h3 className="text-[1.5rem] capitalize font-bold mb-6">
                      Tóm tắt đơn hàng
                    </h3>
                    <div className="flex justify-between mb-5">
                      <span className="text-[rgba(0,0,0,0.6)] text-[1.25rem]">
                        Tạm tính
                      </span>
                      <span className="text-[#000000] font-bold">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <div className="flex justify-between mb-10">
                      <span className="text-[rgba(0,0,0,0.6)] text-[1.25rem]">
                        Phí vận chuyển
                      </span>
                      <span className="text-[#000000] font-bold">Miễn phí</span>
                    </div>
                    <div className="flex justify-between font-bold mb-6">
                      <span className="text-[rgba(0,0,0)] text-[1.25rem]">
                        Tổng
                      </span>
                      <span className="text-[#000000] font-bold text-[1.5rem]">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                    <button
                      onClick={handleCheckout}
                      className="bg-[#000000] text-white w-full flex items-center justify-center py-4 rounded-[3.875rem] mt-4"
                    >
                      Go to Checkout
                      <span className="inline-block ml-3">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.7959 4.4541L21.5459 11.2041C21.6508 11.3086 21.734 11.4328 21.7908 11.5696C21.8476 11.7063 21.8768 11.8529 21.8768 12.001C21.8768 12.149 21.8476 12.2957 21.7908 12.4324C21.734 12.5691 21.6508 12.6933 21.5459 12.7979L14.7959 19.5479C14.5846 19.7592 14.2979 19.8779 13.9991 19.8779C13.7002 19.8779 13.4135 19.7592 13.2022 19.5479C12.9908 19.3365 12.8721 19.0499 12.8721 18.751C12.8721 18.4521 12.9908 18.1654 13.2022 17.9541L18.0313 13.125L4.25 13.125C3.95163 13.125 3.66548 13.0065 3.4545 12.7955C3.24353 12.5846 3.125 12.2984 3.125 12C3.125 11.7017 3.24353 11.4155 3.45451 11.2045C3.66548 10.9936 3.95163 10.875 4.25 10.875L18.0313 10.875L13.2013 6.04598C12.9899 5.83463 12.8712 5.54799 12.8712 5.2491C12.8712 4.95022 12.9899 4.66357 13.2013 4.45223C13.4126 4.24088 13.6992 4.12215 13.9981 4.12215C14.297 4.12215 14.5837 4.24088 14.795 4.45223L14.7959 4.4541Z"
                            fill="white"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <h3 className="font-bold mb-2">
                  Stay up to date about our latest offers
                </h3>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border rounded px-2 py-2"
                />
                <button className="bg-black text-white px-4 py-2 rounded">
                  Subscribe to Newsletter
                </button>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              Bạn chưa có sản phẩm trong giỏ hàng
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
