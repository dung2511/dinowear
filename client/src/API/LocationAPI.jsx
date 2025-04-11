import axiosClient from "./axiosClient";

const LocationAPI = {
  getAllCity: () => {
    const url = "/location/cities";
    return axiosClient.get(url);
  },
  getDistricts: (code) => {
    const url = `/location/cities/${code}/districts`;
    return axiosClient.get(url);
  },
  getAwards: (codeCity, codeDistrict) => {
    const url = `/location/cities/${codeCity}/districts/${codeDistrict}/awards`;
    return axiosClient.get(url);
  },
};

export default LocationAPI;
