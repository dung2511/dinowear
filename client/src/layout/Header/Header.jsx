import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuHeader from "./MenuHeader";
import IconCart from "../../components/icons/IconCart";
import IconUser from "../../components/icons/IconUser";
import { useDispatch, useSelector } from "react-redux";
import { addSession } from "../../Redux/Action/ActionSession";
import UserAPI from "../../API/UserAPI";
const Header = () => {
  const dispatch = useDispatch();
  if (JSON.parse(localStorage.getItem("id_user"))) {
    const action = addSession(JSON.parse(localStorage.getItem("id_user")));
    dispatch(action);
  }
  const id_user = useSelector((state) => state.Session.idUser);
  const [activeUser, setActiveUser] = useState(false);
  const [fullname, setFullname] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id_user) {
          const rs = await UserAPI.getDetailData(
            JSON.parse(localStorage.getItem("id_user"))
          );
          setFullname(rs.fullname);
          setActiveUser(true);
        }
      } catch (error) {
        if (error.response?.data?.msg === "Không tìm thấy tài khoản") {
          setActiveUser(false);
        }
      }
    };
    fetchData().catch(() => {});
  }, [id_user]);
  return (
    <header className="header">
      <div className="header-top text-[0.875rem] text-center text-white bg-black py-2">
        Sign up and get 20% off to your first order.
        <Link to={"/dang-ky"} className="underline font-medium pl-1">
          Sign Up Now
        </Link>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="flex items-center justify-center menu">
            <Link to={"/"} title="" className="block h-logo ">
              <img src={Logo} alt="Logo" title="Logo" />
            </Link>
            <MenuHeader />
            <div className="header-wrap-actions flex items-center gap-2">
              <div className="header-action-item header-action_search search-desktop activeSearchChecked hidden lg:block">
                <button
                  className="header-action__link flex items-center"
                  title="Tìm kiếm"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.8438 19.3203C21.0781 19.5286 21.0781 19.75 20.8438 19.9844L19.9844 20.8438C19.75 21.0781 19.5286 21.0781 19.3203 20.8438L14.5938 16.1172C14.4896 16.013 14.4375 15.9089 14.4375 15.8047V15.2578C12.901 16.5859 11.1302 17.25 9.125 17.25C6.88542 17.25 4.97135 16.4557 3.38281 14.8672C1.79427 13.2786 1 11.3646 1 9.125C1 6.88542 1.79427 4.97135 3.38281 3.38281C4.97135 1.79427 6.88542 1 9.125 1C11.3646 1 13.2786 1.79427 14.8672 3.38281C16.4557 4.97135 17.25 6.88542 17.25 9.125C17.25 11.1302 16.5859 12.901 15.2578 14.4375H15.8047C15.9349 14.4375 16.0391 14.4896 16.1172 14.5938L20.8438 19.3203ZM4.71094 13.5391C5.9349 14.763 7.40625 15.375 9.125 15.375C10.8438 15.375 12.3151 14.763 13.5391 13.5391C14.763 12.3151 15.375 10.8438 15.375 9.125C15.375 7.40625 14.763 5.9349 13.5391 4.71094C12.3151 3.48698 10.8438 2.875 9.125 2.875C7.40625 2.875 5.9349 3.48698 4.71094 4.71094C3.48698 5.9349 2.875 7.40625 2.875 9.125C2.875 10.8438 3.48698 12.3151 4.71094 13.5391Z"></path>
                  </svg>
                </button>
              </div>
              <Link className="inline-block" to={"/gio-hang"}>
                <IconCart />
              </Link>
              {activeUser ? (
                <Link className="inline-block" to={"/thong-tin-tai-khoan"}>
                  {fullname}
                </Link>
              ) : (
                <Link className="inline-block" to={"/dang-nhap"}>
                  <IconUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
