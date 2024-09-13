import React, {useContext, useState} from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../context/UserContext";

const AppLayout = () => {

  const [userName, setUserName] = useState('haseeb');
  const [userId, setUserId] = useState('baglol');

  return (
    <>
      <UserContext.Provider value={{userName, setUserName}}>
        <Header/>
      </UserContext.Provider>
      <main className="main">
        <Outlet/>
      </main>
      <UserContext.Provider value={{userId, setUserId}}>
        <Footer/>
      </UserContext.Provider>
    </>
  );
}

export default AppLayout;