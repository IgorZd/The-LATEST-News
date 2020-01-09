import React from "react";
import "../styles/Header.css";
import Clock from "./Clock";
const Header = () => {
  return (
    <header>
      <p className="date">{new Date().toDateString()}</p>
      <p className="name">The LATEST News</p>
      <div className="clock_box">
        <Clock />
      </div>
    </header>
  );
};
export default Header;
