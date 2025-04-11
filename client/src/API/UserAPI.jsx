import axiosClient from "./axiosClient";

const UserAPI = {
  getAllData: () => {
    const url = "/users";
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/api/users/${id}`;
    return axiosClient.get(url);
  },
  getDetailUser: (query) => {
    const url = `/api/users/detail/login${query}`;
    return axiosClient.get(url);
  },
  registerUser: (data) => {
    const url = `/api/users/create/`;
    return axiosClient.post(url, data);
  },
  login: (data) => {
    const url = "/api/users/login";
    return axiosClient.post(url, data);
  },
};

export default UserAPI;
