import React from "react";
import {
  NavLink,
  BrowserRouter,
} from "react-router-dom";

function Header() {
  const isAuth = false;

  return (
    <header className={"header-nav"}>
      <BrowserRouter>
        <NavLink
          exact
          to="/"
          className={"homepage"}
          activeClassName="active"
        >
          <p>{"Logo"}</p>
        </NavLink>

        {isAuth ? (
          <NavLink
            exact
            to="/settings"
            className={"me"}
            activeClassName="active"
          >
            <p>{"user/me"}</p>
          </NavLink>
        ) : (
          <>
            <NavLink
              exact
              to="/login"
              className={"login"}
              activeClassName="active"
            >
              <p>{"Login"}</p>
            </NavLink>

            <NavLink
              exact
              to="/register"
              className={"register"}
              activeClassName="active"
            >
              <p>{"Join NOW"}</p>
            </NavLink>
          </>
        )}
      </BrowserRouter>
    </header>
  );
}

export {Header};
