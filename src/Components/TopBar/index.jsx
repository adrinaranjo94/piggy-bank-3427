import React from "react";
import Button from "../Button";
import SearchBar from "./SearchBar";
import "./styles.css";

const TopBar = (props) => {
  return (
    <div className="topbar">
      <SearchBar />
      <Button />
    </div>
  );
};

export default TopBar;
