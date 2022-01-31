import React from "react";

import "./App.css";
import { BankProvider } from "./context/BankContext";
import { AppRouter } from "./router";
import ContentSide from "./Sides/ContentSide";

import LeftSide from "./Sides/LeftSide";

const App = () => {
  return (
    <BankProvider>
      <AppRouter>
        <div className="App">
          <LeftSide />
          <ContentSide />
        </div>
      </AppRouter>
    </BankProvider>
  );
};

export default App;
