import "./ArticleItem.scss";

import React from "react";

interface ArticleItemProps {
  article: string;
}

function ArticleItem({article}: ArticleItemProps) {
  return (
    <li className={"article-item"}>
      <p>{article}</p>
    </li>
  );
}

export {ArticleItem};
