import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes";
import Card from "./components/Card";
import store from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Card>
          <Routes />
        </Card>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
