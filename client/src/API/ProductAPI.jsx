import axiosClient from "./axiosClient";

const ProductAPI = {
  getAPI: () => {
    const url = "/api/products";
    return axiosClient.get(url);
  },
  getCategory: (query) => {
    const url = `/api/products/category${query}`;
    return axiosClient.get(url);
  },

  getDetail: (slug) => {
    const url = `/api/products/${slug}`;
    return axiosClient.get(url);
  },

  getPagination: (query) => {
    const url = `/api/products/pagination${query}`;
    return axiosClient.get(url);
  },
  getNewArrivals: () => {
    const url = "/api/products/new-arrivals";
    return axiosClient.get(url);
  },
  getProductSale: () => {
    const url = "/api/products/product-sale";
    return axiosClient.get(url);
  },
};
export default ProductAPI;
