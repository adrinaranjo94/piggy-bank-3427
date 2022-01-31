import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const MenuItem = (props) => {
  return (
    <Link to={props.path}>
      <div
        className={`menu__item ${props.active ? "menu__item--isActive" : ""}`}
      >
        {props.text}
      </div>
    </Link>
  );
};

export default MenuItem;
