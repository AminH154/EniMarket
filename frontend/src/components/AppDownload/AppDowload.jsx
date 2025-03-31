import React from "react";
import { assets } from "../../assets/assets";
import "./AppDownload.css";
import App from "../../App";

function AppDowload() {
  return (
    <div className="appdownload " id="appdownload">
      <p>
        For Better Experience Download <br />
        Bakso pak Kumis App
      </p>
      <div className="app-download-platforms">
        <img src={assets.app_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
}

export default AppDowload;
