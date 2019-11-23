import "./ArticleList.scss";

import React from "react";
import {ArticleItem} from "../ArticleItem/ArticleItem";

interface ArticleListProps {
  articles: string[];
}

function ArticleList({articles}: ArticleListProps) {
  return (
    <ul className={"article-list"}>
      {articles.map((article, index) => (
        <ArticleItem
          key={`${index}-${article.slice(0, 3)}`}
          article={article}
        />
      ))}
    </ul>
  );
}

export {ArticleList};
