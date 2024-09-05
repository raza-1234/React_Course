import React from "react";

import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <React.Fragment>
      <Header/>
      <main className="main">
        <Outlet/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}

export default AppLayout;