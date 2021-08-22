import React from "react";
import "./Topbar.scss";
export default function Topbar() {
  return (
    <div className="topbar" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro">Nav to Intro</a>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
