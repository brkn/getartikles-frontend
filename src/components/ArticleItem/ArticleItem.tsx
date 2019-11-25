import "./ArticleItem.scss";

import React from "react";

interface ArticleItemProps {
  /* article: {
    title: string;
    dateTime?: string;
  }; */
  article: any;
}

function ArticleItem({article: {title, dateTime}}: ArticleItemProps) {
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

        <span className={"article-popularity"}>{"2k"}</span>
      </div>

      <article className={"article"}>
        <header className={"article-header"}>
          <h1 className={"article-title"}>
            <a href="/domain/github.io/">{title}</a>
          </h1>

          <p className={"article-topics-row"}>
            <a
              className={"article-topic"}
              href={"/topic/topicname/"}
            >
              {"Topic"}
            </a>

            <a
              className={"article-topic"}
              href={"/topic/topicname/"}
            >
              {"Topic2"}
            </a>

            <a
              className={"article-topic"}
              href={"/topic/topicname/"}
            >
              {"English"}
            </a>
          </p>
        </header>

        <h2 className={"article-meta"}>
          <p className={"article-source"}>
            {"at "}

            <a href={"/source/source-name/"}>{"Source.io"}</a>
          </p>

          <a
            className={"article-author"}
            href={"/author/author-name/"}
          >
            {"by Author Authorinio"}
          </a>
        </h2>

        <p className="article-teaser-preview">
          {"This will be small teaser of the content. It will be 130 characters."}
          {"It should show elipsis at the end of teaser. 10 extra chrcters"}
        </p>

        <footer className="article-footer">
          <p className="article-publish-date">
            {"published "}

            <time dateTime={dateTime || "2020"}>{"2 months ago"}</time>
          </p>

          <p className="article-reading-time">{"3 minutes read"}</p>
        </footer>
      </article>
    </li>
  );
}

export {ArticleItem};
