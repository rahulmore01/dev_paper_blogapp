import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./features/userSlice"; // Create this slice according import { configureStore } from '@reduxjs/toolkit';
import Cookies from "js-cookie";
// Import your userSlice according to your needs

const initialState = {
  user: {
    name: "",
    email: "",
    token: Cookies.get("token") || "",
  },
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: initialState,
});

export default store;

// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import userDataReducer from "./features/userSlice"; // Import your userSlice here

// export const store = configureStore({
//   reducer: {
//     userData: userDataReducer,
//   },
// });
