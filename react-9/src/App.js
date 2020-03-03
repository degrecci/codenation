import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <h1>Fórum</h1>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
