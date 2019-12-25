import "./Homepage.scss";

import React, {useState} from "react";

import {ArticleList} from "../ArticleList/ArticleList";
import {SortingHeader} from "../SortingHeader/SortingHeader";
import {
  SortingOptions,
  DateSortingOptions,
} from "../../utils/sorting-constants";

export function Homepage() {
  const [
    selectedSortingOption,
    setSelectedSortingOption
  ] = useState("new" as SortingOptions);
  const [
    selectedDateSortingOption,
    setSelectedDateSortingOption
  ] = useState("all" as DateSortingOptions);
  
  return (
    <main
      className={"homepage"}
      role={"main"}
    >
      <SortingHeader
        selectedSortingOption={selectedSortingOption}
        setSelectedSortingOption={setSelectedSortingOption}
        selectedDateSortingOption={selectedDateSortingOption}
        setSelectedDateSortingOption={setSelectedDateSortingOption}
      />

      <ArticleList
        sortBy={selectedSortingOption}
        filterDate={selectedDateSortingOption}
      />
    </main>
  );
}
