import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import favicon from "../../../../assets/images/favicon.png";
const PageMeta = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {title || "DinoWear - Thời Trang Cá Tính, Phong Cách Hiện Đại"}
      </title>
      <meta
        name="description"
        content={
          description ||
          "Khám phá bộ sưu tập thời trang cực chất tại DinoWear! 🛍️ Đa dạng phong cách từ streetwear đến basic, mang đến sự thoải mái và cá tính riêng. Cập nhật xu hướng mới nhất, chất liệu cao cấp, giá cả hợp lý. Shop ngay hôm nay! 🚀"
        }
      />
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
  );
};

export const AppWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default PageMeta;
