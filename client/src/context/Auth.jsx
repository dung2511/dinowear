import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [jwt, setJWT] = useState();
  const [user, setUser] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.getItem("jwt") &&
      setJWT(JSON.parse(localStorage.getItem("jwt")));
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  const addLocal = (jwt, user) => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
    localStorage.setItem("id_user", JSON.stringify(user));

    setJWT(jwt);
    setUser(user);
  };

  const logOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");

    setJWT();
    setUser();
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        jwt,
        user,
        addLocal,
        logOut,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
