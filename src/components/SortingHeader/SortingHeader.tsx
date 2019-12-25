import "./SortingHeader.scss";

import React, {useState} from "react";

import {Dropdown} from "../Dropdown/Dropdown";
import {
  SortingOptions,
  sortingOptions,
  dateSortingOptions,
  DateSortingOptions,
} from "../../utils/sorting-constants";

interface SortingHeaderProps {
  selectedSortingOption: SortingOptions;
  setSelectedSortingOption: React.Dispatch<
    React.SetStateAction<SortingOptions>
  >;
  selectedDateSortingOption: DateSortingOptions;
  setSelectedDateSortingOption: React.Dispatch<
    React.SetStateAction<DateSortingOptions>
  >;
}

export function SortingHeader({
  selectedSortingOption,
  setSelectedSortingOption,
  selectedDateSortingOption,
  setSelectedDateSortingOption,
}: SortingHeaderProps) {
  return (
    <div className={"sorting-header-container"}>
      <Dropdown
        selectedOption={selectedSortingOption}
        options={sortingOptions}
        handleSelect={setSelectedSortingOption}
      />

      <Dropdown
        selectedOption={selectedDateSortingOption}
        options={dateSortingOptions}
        handleSelect={setSelectedDateSortingOption}
      />
    </div>
  );
}
