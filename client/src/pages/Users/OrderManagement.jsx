import React, { useEffect, useState } from "react";
import SidebarUser from "./Components/SidebarUser";
import { Link } from "react-router-dom";
import OrderAPI from "../../API/OrderAPI";
import { formatDateOrder, formatPriceOrder } from "../../utils/format";

const OrderManagement = () => {
  const [listOrder, setListOrder] = useState([]);
  useEffect(() => {
    const fetchDataOrder = async () => {
      const id_user = JSON.parse(localStorage.getItem("id_user"));
      if (id_user) {
        const response = await OrderAPI.getAllOrderByUser(id_user);
        console.log(response);

        setListOrder(response);
      }
    };
    fetchDataOrder();
  }, []);
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex">
          <SidebarUser />
          <div className="w-full lg:flex-1 lg:pl-6">
            <div className="bg-white px-4 py-6 rounded-[0.625rem]">
              <p className="text-[1.25rem] text-center font-semibold mb-6">
                Quản lý đơn hàng
              </p>
              <div className="">
                <table className="w-full table-order flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                  <thead className="text-white">
                    <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                      <th className="p-3 text-left">Đơn hàng</th>
                      <th className="p-3 text-left">Thời gian</th>
                      <th className="p-3 text-left">Trạng thái</th>
                      <th className="p-3 text-left">Tổng tiền</th>
                      <th className="p-3 text-left" width="110px">
                        Chi tiết
                      </th>
                    </tr>
                  </thead>
                  <tbody className="flex-1 sm:flex-none">
                    {listOrder &&
                      listOrder.map((value) => {
                        return (
                          <tr
                            key={value._id}
                            className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0"
                          >
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                              #123456
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                              {formatDateOrder(value.createdAt)}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3">
                              {value.status}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">
                              {formatPriceOrder(value.total_price)}
                            </td>
                            <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">
                              <Link to={"/quan-ly-don-hang/" + value._id}>
                                Xem chi tiết
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderManagement;
