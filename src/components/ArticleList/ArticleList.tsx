import "./ArticleList.scss";

import React, {
  useEffect,
  useState
} from "react";

import {ArticleItem} from "../ArticleItem/ArticleItem";
import {articles} from "./data";

interface ArticleListProps {
  sortBy: "new" | "popularity";
}

export function ArticleList({sortBy}: ArticleListProps) {
  const [
    sortedArticles,
    setSortedArticles
  ] = useState(articles);

  useEffect(() => {
    console.log(sortBy);
    switch (sortBy) {
      case "new": {
        sortByNew();
        break;
      }

      case "popularity": {
        sortByPopularity();
        break;
      }
    }

    function sortByNew() {
      setSortedArticles([...articles].sort((articleA, articleB) => {
        return Number(articleB.publish_date) - Number(articleA.publish_date);
      }));
    }

    function sortByPopularity() {
      setSortedArticles([...articles].sort((articleA, articleB) => {
        return articleB.popularity - articleA.popularity;
      }));
    }
  }, [sortBy]);

  return (
    <ul className={"article-list"}>
      {sortedArticles.map((article, index) => (
        <ArticleItem
          key={`${index}-${article.title.slice(0, 9)}`}
          {...article}
        />
      ))}
    </ul>
  );
}
