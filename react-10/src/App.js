import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <Card>
        <Routes />
      </Card>
    </BrowserRouter>
  );
}

export default App;
