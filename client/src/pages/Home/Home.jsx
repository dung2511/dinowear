import React from "react";
import BannerHome from "./BannerHome";
import ListBrands from "./ListBrands";
import NewArrivals from "./NewArrivals";
import PageMeta from "../Admin/components/common/PageMeta";
import ProductCategory from "./ProductCategory";
import ProductSale from "./ProductSale";
import Policy from "./Policy";
import CustomerComment from "./CustomerComment";
import NewsHome from "./NewsHome";
const Home = () => {
  return (
    <>
      <PageMeta
        title="DinoWear - Thời Trang Cá Tính, Phong Cách Hiện Đại"
        description="Khám phá bộ sưu tập thời trang cực chất tại DinoWear! Đa dạng phong cách từ streetwear đến basic, mang đến sự thoải mái và cá tính riêng. Cập nhật xu hướng mới nhất, chất liệu cao cấp, giá cả hợp lý. Shop ngay hôm nay! "
      />
      <BannerHome />
      <ListBrands />
      <ProductCategory />
      <NewArrivals />
      <ProductSale />
      <CustomerComment />
      <NewsHome />
      <Policy />
    </>
  );
};
export default Home;
