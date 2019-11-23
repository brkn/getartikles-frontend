import "./Header.scss";

import React from "react";
import {
  NavLink,
  BrowserRouter,
} from "react-router-dom";

function Header() {
  const isAuth = false;

  return (
    <header className={"header"}>
      <BrowserRouter>
        <NavLink
          exact
          to="/"
          className={"homepage"}
          activeClassName="active"
        >
          {"Logo"}
        </NavLink>

        <nav className={"navlink"}>
          {isAuth ? (
            <NavLink
              exact
              to="/settings"
              className={"me"}
              activeClassName="active"
            >
              {"user/me"}
            </NavLink>
          ) : (
            <>
              <NavLink
                exact
                to="/login"
                className={"login"}
                activeClassName="active"
              >
                {"Login"}
              </NavLink>

              <NavLink
                exact
                to="/register"
                className={"register"}
                activeClassName="active"
              >
                {"Join NOW"}
              </NavLink>
            </>
          )}
        </nav>
      </BrowserRouter>
    </header>
  );
}

export {Header};
