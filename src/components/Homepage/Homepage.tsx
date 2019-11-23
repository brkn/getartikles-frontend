import "./Homepage.scss";

import React from "react";
import {ArticleList} from "../ArticleList/ArticleList";

function Homepage() {
  return (
    <main
      className={"homepage"}
      role={"main"}
    >
      <p>{"this will be sorting header"}</p>

      <ArticleList articles={["art1", "art2"]} />
    </main>
  );
}

export {Homepage};
