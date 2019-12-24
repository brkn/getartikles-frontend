import "./Header.scss";

import React from "react";
import {
  NavLink,
  Link
} from "react-router-dom";

export function Header() {
  const isAuth = false;

  return (
    <header className={"header"}>
      <Link
        to="/"
        className={"logo"}
      >
        {"Logo"}
      </Link>

      <nav className={"navlink"}>
        {isAuth ? (
          <NavLink
            exact
            to="/settings"
            className={"settings"}
            activeClassName="active"
          >
            {"settings"}
          </NavLink>
        ) : (
          <>
            {/* <NavLink
              exact
              to="/login"
              className={"login"}
              activeClassName="active"
            >
              {"Login"}
            </NavLink> */}

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
    </header>
  );
}
