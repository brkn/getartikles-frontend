import "./App.scss";

import React from "react";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";

import {Homepage} from "../Homepage/Homepage";
import {Header} from "../Header/Header";

function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export {App};
