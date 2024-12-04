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

export interface AlgorithmInfo {
  name: string;
  category: string;
  description: string;
  largeDescription: string;
  timeComplexity: {
    best: string;
    average: string;
    worst: string;
  };
}

export type SortingAlgorithm =
  | "bubble"
  | "selection"
  | "insertion"
  | "merge"
  | "quick"
  | "heap"
  | "tim"
  | "intro";
