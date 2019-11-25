import "./ArticleList.scss";

import React from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";

interface ArticleListProps {
  articles?: {
    title: string;
  }[];
}

function ArticleList({articles: _}: ArticleListProps) {
  const articles = [
    {title: "Article title 1 wooo"},
    {title: "Is this article title 2? wooo?"},
    {title: "This is actually article title 3. Trust me."},
  ];

  return (
    <ul className={"article-list"}>
      {articles.map((article, index) => (
        <ArticleItem
          key={`${index}-${article.title.slice(0, 9)}`}
          article={article}
        />
      ))}
    </ul>
  );
}

export {ArticleList};
