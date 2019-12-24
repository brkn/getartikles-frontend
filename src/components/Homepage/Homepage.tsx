import "./Homepage.scss";

import React, {useState} from "react";

import {ArticleList} from "../ArticleList/ArticleList";
import {SortingHeader} from "../SortingHeader/SortingHeader";
import {SortingOptions} from "../../utils/sorting-constants";

export function Homepage() {
  const [
    selectedSortingOption,
    setSelectedSortingOption
  ] = useState("new" as SortingOptions);

  return (
    <main
      className={"homepage"}
      role={"main"}
    >
      <SortingHeader
        selectedSortingOption={selectedSortingOption}
        setSelectedSortingOption={setSelectedSortingOption}
      />

      <ArticleList sortBy={selectedSortingOption} />
    </main>
  );
}
