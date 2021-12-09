import React from "react";
import "./App.css";
import ContentSide from "./Sides/ContentSide";

import LeftSide from "./Sides/LeftSide";

const App = () => {
  return (
    <div className="App">
      <LeftSide />
      <ContentSide />
    </div>
  );
};

export default App;
