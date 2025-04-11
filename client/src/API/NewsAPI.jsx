import axiosClient from "./axiosClient";

const NewsAPI = {
  getAPI: () => {
    const url = "/api/news";
    return axiosClient.get(url);
  },
  getDetail: (id) => {
    const url = `/api/news/${id}`;
    return axiosClient.get(url);
  },
  getNewsHome: () => {
    const url = "/api/news/home";
    return axiosClient.get(url);
  },
};
export default NewsAPI;
