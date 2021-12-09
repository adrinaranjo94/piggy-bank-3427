import React from "react";
import "./styles.css";

const MenuItem = (props) => {
  return (
    <div className={`menu__item ${props.active ? "menu__item--isActive" : ""}`}>
      {props.text}
    </div>
  );
};

export default MenuItem;
