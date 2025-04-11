import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarUser from "./Components/SidebarUser";
import OrderAPI from "../../API/OrderAPI";
import { formatPrice, formatPriceOrder } from "../../utils/format";
const DetailOrder = () => {
  const { id } = useParams();
  const [detailOrder, setDetailOrder] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      const response = await OrderAPI.getOrderById(id);
      setDetailOrder(response);
    };
    fetchData();
  }, [id]);
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex">
          <SidebarUser />
          <div className="w-full lg:flex-1 lg:pl-6">
            <div className="bg-white px-4 py-6 rounded-[0.625rem]">
              <p className="text-[1.25rem] text-center font-semibold mb-6">
                Chi tiết đơn hàng
              </p>
              <div className="">
                <div className="flex justify-between mb-6">
                  <div className="w-[70%] font-semibold text-[1.125rem]">
                    Sản phẩm
                  </div>
                  <div className="w-[30%] font-semibold text-[1.125rem] text-right">
                    Tạm tính
                  </div>
                </div>
                <div className="list-item-cart  pb-6 border-b-2 border-solid border-[#D6D6D6] mb-4">
                  {detailOrder &&
                    detailOrder?.list_product?.map((value) => {
                      return (
                        <div
                          className="flex justify-between last:mb-0 mb-6"
                          key={value._id}
                        >
                          <div className="w-[70%]">{value.id_product.name}</div>
                          <div className="w-[30%] text-right">
                            {formatPriceOrder(value.id_product.price)}
                          </div>
                        </div>
                      );
                    })}
                </div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-[1.125rem] font-medium">
                    Giao nhận hàng
                  </div>
                  <div className="font-medium ">Giao hàng miễn phí</div>
                </div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <div className="text-[1.125rem] font-medium">
                    Phương thức thanh toán
                  </div>
                  <div className="font-medium ">
                    {detailOrder.payment_method}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[1.25rem] font-semibold ">Tổng</div>
                  <div className="text-[1.25rem] font-semibold ">
                    {formatPrice(detailOrder.total_price)}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white p-4 rounded-[0.625rem]">
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="text-[1.125rem] font-medium">
                  Địa chỉ giao hàng
                </div>
                <div className="font-medium ">
                  {detailOrder?.shipping_address?.address}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="text-[1.125rem] font-medium">Số điện thoại</div>
                <div className="font-medium ">
                  {detailOrder?.id_user?.phone}
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <div className="text-[1.125rem] font-medium">Email</div>
                <div className="font-medium ">
                  {detailOrder?.id_user?.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailOrder;
