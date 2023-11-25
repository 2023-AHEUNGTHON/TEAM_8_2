import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

axios.defaults.baseURL = "http://ec2-13-209-10-74.ap-northeast-2.compute.amazonaws.com:8080";
axios.defaults.withCredentials = true;
