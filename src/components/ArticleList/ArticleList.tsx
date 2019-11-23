import "./ArticleList.scss";

import React from "react";

interface ArticleListProps {
  articles: string[];
}

function ArticleList({articles}: ArticleListProps) {
  return (
    <ul className={"article-list"}>
      {articles.map((article, index) => {
        return (
          <li key={`${index}-${article.slice(0, 3)}`}>
            <p>{article}</p>
          </li>
        );
      })}
    </ul>
  );
}

export {ArticleList};
