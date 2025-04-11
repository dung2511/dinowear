import axiosClient from "./axiosClient";

const NewsAPI = {
  getAPI: () => {
    const url = "/api/admin/news";
    return axiosClient.get(url);
  },
  create: (data) => {
    const url = "/api/admin/news/create";
    return axiosClient.post(url, data);
  },
  getDetail: (id) => {
    const url = `/api/admin/news/${id}`;
    return axiosClient.get(url);
  },
};
export default NewsAPI;
