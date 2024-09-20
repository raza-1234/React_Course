import React, {useContext, useState} from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import UserContext from "../context/UserContext";
import store from "../store/store";
import { Provider } from "react-redux";

const AppLayout = () => {

  const [userName, setUserName] = useState('haseeb');
  const [userId, setUserId] = useState('baglol');

  return (
    <Provider store={store}>
      <UserContext.Provider value={{userName, setUserName}}>
        <Header/>
      </UserContext.Provider>
      <main className="main">
        <Outlet/>
      </main>
      <UserContext.Provider value={{userId, setUserId}}>
        <Footer/>
      </UserContext.Provider>
    </Provider>
  );
}

export default AppLayout;