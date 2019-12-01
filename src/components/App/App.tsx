import React from "react";
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";

import {Homepage} from "../Homepage/Homepage";
import {Header} from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      {/* <SideNav /> */}

      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={Homepage}
          />

          <Route
            exact
            path="/login"
            component={Homepage}
          />

          <Route
            exact
            path="/register"
            component={Homepage}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export {App};
