import axiosClient from "./axiosClient";

const CommentAPI = {
  get_comment: (id) => {
    const url = `/api/comment/product/${id}`;
    return axiosClient.get(url);
  },
  getAllComment: () => {
    const url = "/api/comment/";
    return axiosClient.get(url);
  },
  post_comment: (data, id) => {
    const url = `/api/comment/${id}`;
    return axiosClient.post(url, data);
  },
};

export default CommentAPI;
