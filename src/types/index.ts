export interface ArrayBar {
  value: number;
  isComparing: boolean;
  isSorted: boolean;
  isSwapping: boolean;
}

export interface SortingStats {
  comparisons: number;
  swaps: number;
  steps: number;
}

export type SortingAlgorithm = "bubble" | "selection" | "insertion" | "merge" | "quick" | "heap" | "tim" | "intro";
