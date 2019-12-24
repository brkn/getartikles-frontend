import "./Homepage.scss";

import React from "react";

import {ArticleList} from "../ArticleList/ArticleList";

export function Homepage() {
  return (
    <main
      className={"homepage"}
      role={"main"}
    >
      <p>{"this will be sorting header, search bar will be at the header"}</p>

      <ArticleList sortBy={"new"}/>
    </main>
  );
}
