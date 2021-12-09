import React from "react";
import MenuItem from "./Item";
import "./styles.css";

const menuItems = [
  { text: "Dashboard", active: true, key: "dashboard" },
  { text: "Transactions", active: false, key: "transactions" },
  { text: "Settings", active: false, key: "settings" },
];

const Menu = (props) => {
  return (
    <div className="menu">
      {menuItems.map(({ text, active, key }) => (
        <MenuItem text={text} active={active} key={key} />
      ))}
    </div>
  );
};

export default Menu;
