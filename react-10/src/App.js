import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/sobre" style={{ marginLeft: 8 }}>
          Sobre
        </Link>
      </header>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
