import axiosClient from "./axiosClient";

const ProductAPI = {
  getAPI: () => {
    const url = "/api/admin/products";
    return axiosClient.get(url);
  },
  getDetail: (id) => {
    const url = `/api/admin/products/${id}`;
    return axiosClient.get(url);
  },
  updateProduct: (data) => {
    const url = `/api/admin/products/update/`;
    return axiosClient.patch(url, data);
  },
};
export default ProductAPI;
