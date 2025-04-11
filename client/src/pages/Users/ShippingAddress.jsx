import React, { useEffect, useState } from "react";
import SidebarUser from "./Components/SidebarUser";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import LocationAPI from "../../API/LocationAPI";

const ShippingAddress = () => {
  const [city, setCity] = useState("");
  const [listCity, setListCity] = useState("");
  const [district, setDistrict] = useState("");
  const [listDistrict, setListDistrict] = useState("");
  const [award, setAward] = useState("");
  const [listAward, setListAward] = useState("");
  const [address, setAddress] = useState("");
  useEffect(() => {
    const fetchDataCity = async () => {
      const response = await LocationAPI.getAllCity();
      setListCity(response);
    };
    fetchDataCity();
  }, []);
  useEffect(() => {
    const fetchDataDistrict = async () => {
      if (city) {
        const response = await LocationAPI.getDistricts(city);
        setListDistrict(response);
      }
    };
    fetchDataDistrict();
  }, [city]);
  useEffect(() => {
    const fetchDataAwards = async () => {
      if (city && district) {
        const response = await LocationAPI.getAwards(city, district);
        setListAward(response);
      }
    };
    fetchDataAwards();
  }, [district]);
  const handleUpdate = (e) => {
    e.preventDefault();
  };
  return (
    <section className="py-16 bg-[#f6f6f6]">
      <div className="container">
        <div className="flex">
          <SidebarUser />
          <div className="w-full lg:flex-1 lg:pl-6">
            <div className="bg-white px-4 py-6 rounded-[0.625rem]">
              <form className="form " onSubmit={handleUpdate}>
                <p className="text-[1.25rem] text-center font-semibold mb-6">
                  Địa chỉ giao hàng
                </p>
                <div className="flex flex-wrap text-[var(--cl-text-main-2)] md:-mx-2">
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`city-select-label`}>
                          Tình / Thành phố
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`city-select-label`}
                          id="city-simple-select"
                          value={city || ""}
                          name={"city"}
                          onChange={(e) => setCity(e.target.value)}
                          label={"Tình / Thành phố"}
                        >
                          {listCity &&
                            listCity.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item._id}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`district-select-label`}>
                          Quân / Huyện
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`district-select-label`}
                          id="district-simple-select"
                          value={district || ""}
                          name={"district"}
                          onChange={(e) => setCity(e.target.value)}
                          label={"Quân / Huyện"}
                        >
                          {listDistrict &&
                            listDistrict.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item.code}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }}>
                      <FormControl fullWidth>
                        <InputLabel id={`award-select-label`}>
                          Phường / Xã
                        </InputLabel>
                        <Select
                          fullWidth
                          className="w-full"
                          labelId={`award-select-label`}
                          id="award-simple-select"
                          value={award || ""}
                          name={"award"}
                          onChange={(e) => setCity(e.target.value)}
                          label={"Phường / Xã"}
                        >
                          {listAward &&
                            listAward.map((item) => {
                              return (
                                <MenuItem value={item.code} key={item.code}>
                                  {item.name}
                                </MenuItem>
                              );
                            })}
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="w-full md:w-1/2 md:px-3 mb-4">
                    <Box sx={{ width: 1 }} autoComplete="off">
                      <TextField
                        type={"text"}
                        fullWidth
                        id={`outlined-address`}
                        label={"Ghi chú (số nhà , địa chỉ chi tiết)"}
                        name={"address"}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        variant="outlined"
                      />
                    </Box>
                  </div>
                </div>
                <div className="flex w-full justify-center mt-4 font-medium">
                  <button className="btn-17">
                    <span className="text-container">
                      <span className="text">Lưu thay đổi</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingAddress;
