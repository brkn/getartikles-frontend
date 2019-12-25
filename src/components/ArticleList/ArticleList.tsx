import "./ArticleList.scss";

import React, {
  useEffect, useState
} from "react";
import debounce from "lodash/debounce";

import {ArticleItem} from "../ArticleItem/ArticleItem";
import {articles} from "./data";
import {
  SortingOptions,
  DateSortingOptions,
} from "../../utils/sorting-constants";
import {convertEpochToDate} from "../../utils/date-utils";

interface ArticleListProps {
  sortBy: SortingOptions;
  filterDate: DateSortingOptions;
}

export function ArticleList({
  sortBy,
  filterDate,
}: ArticleListProps) {
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
    const oldestAllowedDate = new Date();
    oldestAllowedDate.setHours(0, 0, 0);
    oldestAllowedDate.setMilliseconds(0);

    switch (filterDate) {
      case "week":
        oldestAllowedDate.setDate(oldestAllowedDate.getDate() - 7);
        break;
      case "month":
        oldestAllowedDate.setMonth(oldestAllowedDate.getMonth() - 1);
        break;
      case "year":
        oldestAllowedDate.setFullYear(oldestAllowedDate.getFullYear() - 1);
        break;
    }

    const filteredArticles = sortedArticles.filter((article) => {
      const articleDate = convertEpochToDate(article.publish_date);

      return oldestAllowedDate <= articleDate;
    });

    setSortedArticles(filteredArticles);

    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterDate]);

  useEffect(() => {
    switch (sortBy) {
      case "new": {
        sortByNew();
        break;
      }

      case "old": {
        sortByOld();
        break;
      }

      case "popularity": {
        sortByPopularity();
        break;
      }
    }
    resetLastArticleIndex();

    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }

    function sortByNew() {
      setSortedArticles(
        [...sortedArticles].sort((articleA, articleB) => {
          return Number(articleB.publish_date) - Number(articleA.publish_date);
        })
      );
    }

    function sortByOld() {
      setSortedArticles(
        [...sortedArticles].sort((articleA, articleB) => {
          return Number(articleA.publish_date) - Number(articleB.publish_date);
        })
      );
    }

    function sortByPopularity() {
      setSortedArticles(
        [...sortedArticles].sort((articleA, articleB) => {
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

  function resetLastArticleIndex() {
    setLastArticleIndex(9);
  }

  function resetSortedArticles() {
    setSortedArticles(articles);
  }
}
