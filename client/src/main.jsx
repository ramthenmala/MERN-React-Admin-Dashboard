import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./state";
import { Provider } from "react-redux";

const state = configureStore({
  reducer: {
    global: globalSlice,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider state={state}>
      <App />
    </Provider>
  </React.StrictMode>
);
