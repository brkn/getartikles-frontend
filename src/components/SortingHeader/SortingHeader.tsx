import "./SortingHeader.scss";

import React, {useState} from "react";

import {Dropdown} from "../Dropdown/Dropdown";
import {
  SortingOptions,
  sortingOptions,
} from "../../utils/sorting-constants";

interface SortingHeaderProps {
  selectedSortingOption: SortingOptions;
  setSelectedSortingOption: React.Dispatch<
    React.SetStateAction<SortingOptions>
  >;
}

export function SortingHeader({
  selectedSortingOption,
  setSelectedSortingOption,
}: SortingHeaderProps) {
  return (
    <div className={"sorting-header"}>
      <Dropdown
        label={"Sort"}
        selectedOption={selectedSortingOption}
        options={sortingOptions}
        handleSelect={setSelectedSortingOption}
      />
    </div>
  );
}
