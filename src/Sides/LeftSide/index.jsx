import React from "react";
import Logo from "../../Components/Logo";
import Menu from "../../Components/Menu";
import "./styles.css";

const LeftSide = (props) => {
  return (
    <div className="leftSide">
      <Logo />
      <Menu />
    </div>
  );
};

export default LeftSide;
