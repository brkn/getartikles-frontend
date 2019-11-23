import "./Header.scss";

import React from "react";
import {NavLink, BrowserRouter, Link} from "react-router-dom";

function Header() {
  const isAuth = true;

  return (
    <header className={"header"}>
      <BrowserRouter>
        <Link to="/"
className={"homepage"}>
          {"Logo"}
        </Link>

        <nav className={"navlink"}>
          {isAuth ? (
            <NavLink exact
to="/settings"
className={"settings"}
activeClassName="active">
              {"settings"}
            </NavLink>
          ) : (
            <>
              <NavLink exact
to="/login"
className={"login"}
activeClassName="active">
                {"Login"}
              </NavLink>

              <NavLink exact
to="/register"
className={"register"}
activeClassName="active">
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