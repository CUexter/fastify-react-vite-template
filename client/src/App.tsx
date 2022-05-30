import { BrowserRouter } from "react-router-dom";
import React from "react";
import Main from "@/main";

const App = () => (
  <BrowserRouter>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </BrowserRouter>
);
export default App;
