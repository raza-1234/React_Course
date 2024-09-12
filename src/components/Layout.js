import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <>
      <Header/>
      <main className="main">
        <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default AppLayout;