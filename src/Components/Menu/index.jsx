import React from "react";
import MenuItem from "./Item";
import "./styles.css";

const menuItems = [
  { text: "Dashboard", active: true, key: "/dashboard", path: "/dashboard" },
  {
    text: "Transactions",
    active: false,
    key: "/transactions",
    path: "/transactions",
  },
  { text: "Settings", active: false, key: "/settings", path: "/settings" },
];

const Menu = (props) => {
  return (
    <div className="menu">
      {menuItems.map(({ text, active, key, path }) => (
        <MenuItem text={text} active={active} key={key} path={path} />
      ))}
    </div>
  );
};

export default Menu;
