import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";

import "./index.scss";
import App from "./components/app/app";
import reportWebVitals from "./bin/report-web-vitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
