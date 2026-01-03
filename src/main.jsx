import App from "./App.jsx";
import React from "react";
import { App as AntdApp, ConfigProvider } from "antd";
import ReactDOM from "react-dom/client";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <AntdApp>
      <App />
    </AntdApp>
  </React.StrictMode>
);
