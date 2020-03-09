import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Routes from "./routes";
import Card from "./components/Card";
import { store, persistor } from "../src/store";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Card>
            <Routes />
          </Card>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
