import "./ArticleList.scss";

import React, {
  useEffect, useState
} from "react";
import debounce from "lodash/debounce";

import {ArticleItem} from "../ArticleItem/ArticleItem";
import {articles} from "./data";
import {SortingOptions} from "../../utils/sorting-constants";

interface ArticleListProps {
  sortBy: SortingOptions;
}

export function ArticleList({sortBy}: ArticleListProps) {
  const [
    sortedArticles,
    setSortedArticles
  ] = useState(articles);
  const [
    lastArticleIndex,
    setLastArticleIndex
  ] = useState(9);

  const contentRef = React.createRef<HTMLUListElement>();

  const debouncedHandleOnScroll = debounce(() => {
    const contentElement = contentRef.current;

    const doesNextExists = lastArticleIndex < sortedArticles.length;

    if (doesNextExists && contentElement) {
      const contentOffset =
        contentElement.scrollTop + contentElement.clientHeight;
      const scrollHeight = contentElement.scrollHeight;
      const graceValue = 5;

      if (contentOffset >= scrollHeight - graceValue) {
        setLastArticleIndex(lastArticleIndex + 10);
      }
    }
  }, 250);

  useEffect(() => {
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
    resetLastArticleIndex();

    if(contentRef.current){
      contentRef.current.scrollTop = 0;
    };

    function sortByNew() {
      setSortedArticles(
        [...articles].sort((articleA, articleB) => {
          return Number(articleB.publish_date) - Number(articleA.publish_date);
        })
      );
    }

    function sortByPopularity() {
      setSortedArticles(
        [...articles].sort((articleA, articleB) => {
          return articleB.popularity - articleA.popularity;
        })
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortBy]);

  return (
    <ul
      className={"article-list"}
      ref={contentRef}
      onScroll={debouncedHandleOnScroll}
    >
      {sortedArticles.slice(0, lastArticleIndex).map((article, index) => (
        <ArticleItem
          key={`${index}-${article.title.slice(0, 9)}`}
          {...article}
        />
      ))}
    </ul>
  );

  function resetLastArticleIndex(){
    setLastArticleIndex(9);
  }
}
