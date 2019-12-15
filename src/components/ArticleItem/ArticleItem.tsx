import "./ArticleItem.scss";

import React from "react";

interface ArticleItemProps {
  title: string;
  popularity: string;
  teaser: string;
  thumbnail: string;
  link: string;
  author: string;
  source: string;
  topics: string[];
  date: string;
}

export function ArticleItem({
  title,
  popularity,
  teaser,
  thumbnail,
  link,
  author,
  source,
  topics,
  date,
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

        <span className={"article-popularity"}>{popularity}</span>
      </div>

      <article className={"article"}>
        <header className={"article-header"}>
          <h1 className={"article-title"}>
            <a href={link}>{title}</a>
          </h1>

          <p className={"article-topics-row"}>
            {topics.map((topic) => (
              <a
                key={topic}
                className={"article-topic"}
                href={"/topic/topicname/"}
              >
                {topic}
              </a>
            ))}
          </p>
        </header>

        <img
          src={thumbnail}
          className={"article-thumbnail"}
          alt={"article thumbnail"}
        />

        <h2 className={"article-meta"}>
          <p className={"article-source"}>
            {"from "}

            <a href={"/source/source-name/"}>{source}</a>
          </p>

          <a
            className={"article-author"}
            href={"/author/author-name/"}
          >
            {"by "}
            {author}
          </a>
        </h2>

        <p className="article-teaser-preview">{teaser}</p>

        <footer className="article-footer">
          <p className="article-publish-date">
            {"published "}

            <time dateTime={date || "2020"}>{date}</time>
          </p>

          <p className="article-reading-time">{"3 minutes read"}</p>
        </footer>
      </article>
    </li>
  );
}
