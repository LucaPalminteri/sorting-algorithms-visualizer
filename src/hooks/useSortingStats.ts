import { useState } from "react";
import { SortingStats } from "../types";

export const useSortingStats = () => {
  const [stats, setStats] = useState<SortingStats>({
    comparisons: 0,
    swaps: 0,
    steps: 0,
  });

  const resetStats = () => {
    setStats({
      comparisons: 0,
      swaps: 0,
      steps: 0,
    });
  };

  const incrementComparisons = () => {
    setStats((prev) => ({
      ...prev,
      comparisons: prev.comparisons + 1,
      steps: prev.steps + 1,
    }));
  };

  const incrementSwaps = () => {
    setStats((prev) => ({
      ...prev,
      swaps: prev.swaps + 1,
      steps: prev.steps + 1,
    }));
  };

  return {
    stats,
    resetStats,
    incrementComparisons,
    incrementSwaps,
  };
};
