import "./ArticleItem.scss";

import React from "react";
import {convertEpochToDate} from "../../utils/date-utils";

export interface ArticleItemProps {
  title: string;
  popularity: number;
  teaser: string | null;
  thumbnail: string | null;
  link: string;
  authors: string[];
  source: string;
  topics: string[];
  publish_date: string;
}

export function ArticleItem({
  title,
  popularity,
  teaser,
  thumbnail,
  link,
  authors,
  source,
  topics,
  publish_date,
}: ArticleItemProps) {
  // TODO: convert displayed datetime to relative dates like: 1 hour ago, etc.
  // TODO: wrap <time> elements with a component.
  // - it should take a display format prop like: displayFormat={dd-mm-yyyy}
  // TODO: source span should link to /source/:source, ex: /source/reddit
  // - at sourcePage, we should display a link to actual source like: reddit.com
  // TODO: article-popularity should be a component with rounding logic
  // TODO: use https://schema.org/Article for better SEO
  // TODO: add favicon of source to source element

  // TODO: @high fix all a elements. They should be router links, or external links

  return (
    <li className={"article-item"}>
      <div className={"article-popularity-wrapper"}>
        <span className={"glasses-emoji"}>{"👓"}</span>

        <p className={"article-popularity"}>{getPopularity()}</p>
      </div>

      <article className={"article"}>
        <header className={"article-header"}>
          <h1 className={"article-title"}>
            <a
              href={link}
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              {title}
            </a>
          </h1>

          <p className={"article-topics-row"}>
            {topics.map((topic) => (
              <a
                key={topic}
                className={"article-topic"}
                href={`/topic/${topic}/`}
              >
                {topic}
              </a>
            ))}
          </p>
        </header>

        {thumbnail && (
          <img
            src={thumbnail}
            className={"article-thumbnail"}
            alt={"article thumbnail"}
          />
        )}

        <h2 className={"article-meta"}>
          <p className={"article-source"}>
            {"from "}

            <a href={"/source/source-name/"}>{source}</a>
          </p>

          <p className={"article-authors-wrapper"}>
            {"by "}

            {authors.slice(0, 1).map((author, index) => (
              <a
                key={`${index}-${author}`}
                className={"article-author"}
                href={"/author/author-name/"}
              >
                {author}
              </a>
            ))}
          </p>
        </h2>

        <p className="article-teaser-preview">{teaser}</p>

        <footer className="article-footer">
          <time
            className="article-publish-date"
            dateTime={getDate() || "2020"}
          >
            {getDate()}
          </time>

          <p className="article-reading-time">{"3 minutes read"}</p>
        </footer>
      </article>
    </li>
  );

  function getPopularity(): string {
    if (popularity >= 1000) {
      return `${popularity / 1000}b`;
    }

    return String(popularity);
  }

  function getDate(): string {
    const date = convertEpochToDate(publish_date);

    return date.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
}
