import "./ArticleList.scss";

import React from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";

interface ArticleListProps {
  articles?: {
    title: string;
  }[];
}

function ArticleList({articles: _}: ArticleListProps) {
  const articles = [{title: "article title 1 wooo"}, {title: "article title 2 wooo"}];

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
