export type SortingOptions = typeof sortingOptions[number];

export const sortingOptions = [
  "new",
  "popularity",
  "old"
] as const;

export type DateSortingOptions = typeof dateSortingOptions[number];

export const dateSortingOptions = [
  "week",
  "month",
  "year"
] as const;
