import { BrowserRouter } from "react-router-dom";

const AppMainRouter = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const AppTestRouter = ({ children }) => {
  return (
    <div>
      <h1>Test</h1>
      {children}
    </div>
  );
};

export { AppMainRouter as AppRouter };
