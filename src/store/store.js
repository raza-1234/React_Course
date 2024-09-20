import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    contact: contactSlice
  }
})

export default store;