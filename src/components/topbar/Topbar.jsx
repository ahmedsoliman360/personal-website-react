import React from "react";
import "./Topbar.scss";
import { Person, Mail } from "@material-ui/icons";
export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    // {"topbar" + (menuOpen && " active")}
    <div className="topbar active" id="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            SOLI.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+971561415142</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>ahmedsoliman360@gmail.com</span>
          </div>
        </div>

        <div className="right">
          {/* onClick={() => setMenuOpen(!menuOpen)} */}
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
