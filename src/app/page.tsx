"use client";
import Hero from "@/components/hero/page";
import Navbar from "@/components/navbar/page";

// import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import userDataReducer from "@/redux/features/userSlice";

// const store = configureStore({
//   reducer: {
//     user: userDataReducer,
//   },
// });
export default function Home() {
  return (
    <>
      {/* // <Provider store={store}> */}
      <Navbar />
      <Hero />
    </>
    // </Provider>
  );
}
