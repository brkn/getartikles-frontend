import "./App.scss";

import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import {Homepage} from "../Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export {App};
