import "./ArticleList.scss";

import React from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";
import {articles} from "./data";

/* interface ArticleListProps {
} */

export function ArticleList() {
  // TODO: make author an array.

  return (
    <ul className={"article-list"}>
      {articles.map((article, index) => (
        <ArticleItem
          key={`${index}-${article.title.slice(0, 9)}`}
          {...article}
        />
      ))}
    </ul>
  );
}
