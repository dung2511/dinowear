import axiosClient from "./axiosClient";

const ProductCategoryAPI = {
  getDetail: (slug) => {
    const url = `/api/category/${slug}`;
    return axiosClient.get(url);
  },
  getAllCategory: () => {
    const url = "/api/category";
    return axiosClient.get(url);
  },
  getCategoryHome: () => {
    const url = "/api/category/category-home";
    return axiosClient.get(url);
  },
};
export default ProductCategoryAPI;
