// userSlice.js or userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  name: "",
  email: "",
  token: Cookies.get("token") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { name, email, token } = action.payload;
      state.name = name;
      state.email = email;
      state.token = token;
      Cookies.set("token", token);
    },
    clearUserData: (state) => {
      Cookies.remove("token");
      state.token = "";
      state.email = "";
      state.name = "";
    },
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import Cookies from "js-cookie";

// export const userDataReducer = createSlice({
//   name: "userData",
//   initialState: {
//     name: "", // Set your default value here
//     email: "", // Set your default value here
//     token: Cookies.get("token") || "", // Initialize token from cookie
//   },
//   reducers: {
//     setUserData: (state, action) => {
//       const { name, email, token } = action.payload;
//       state.name = name;
//       state.email = email;
//       state.token = token;
//       Cookies.set("token", token);
//     },
//     clearUserData: (state, action) => {
//       Cookies.remove("token");
//       state.token = "";
//       state.email = "";
//       state.phoneNumber = "";
//       state.name = "";
//       state.lastName = "";
//     },
//   },
// });

// export const { setUserData, clearUserData } = userDataReducer.actions;
// export default userDataReducer.reducer;
