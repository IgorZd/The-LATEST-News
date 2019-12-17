import React from "react";
import Clock from "./Clock";
const Header = () => {
  return (
    <header>
      <p className="name">The LATEST News</p>
      <div className="day_week">
        <p className="date">Today is {new Date().toDateString()}</p>
      </div>
      <Clock />
    </header>
  );
};
export default Header;
