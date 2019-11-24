import "./Homepage.scss";

import React from "react";

import {ArticleList} from "../ArticleList/ArticleList";

function Homepage() {
  return (
    <main
      className={"homepage"}
      role={"main"}
    >
      <p>{"this will be sorting header, search bar will be at the header"}</p>

      <ArticleList />
    </main>
  );
}

export {Homepage};
