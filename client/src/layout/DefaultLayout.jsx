import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default DefaultLayout;
