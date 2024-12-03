"use client";

import { useState, useCallback } from "react";
import { generateRandomArray } from "../utils/arrayUtils";
import { useSortingStats } from "../hooks/useSortingStats";
import ArrayVisualizer from "./ArrayVisualizer";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { ArrayBar } from "../types";
import { AlgorithmInfo } from "../data/algorithms";
import TimeComplexity from "./TimeComplexity";
import SortingStats from "./SortingStats";

const ARRAY_SIZE = 50;

interface SortingVisualizerProps {
  algorithm: string;
  algorithmInfo: AlgorithmInfo;
}

export default function SortingVisualizer({
  algorithm,
  algorithmInfo,
}: SortingVisualizerProps) {
  const [array, setArray] = useState<ArrayBar[]>(
    generateRandomArray(ARRAY_SIZE).map((value) => ({
      value,
      isComparing: false,
      isSorted: false,
      isSwapping: false,
    })),
  );
  const [isSorting, setIsSorting] = useState(false);
  const { stats, resetStats, incrementComparisons, incrementSwaps } =
    useSortingStats();

  const handleReset = useCallback(() => {
    const newArray = generateRandomArray(ARRAY_SIZE).map((value) => ({
      value,
      isComparing: false,
      isSorted: false,
      isSwapping: false,
    }));
    setArray(newArray);
    resetStats();
  }, [resetStats]);

  const handleSort = async () => {
    if (isSorting) return;
    setIsSorting(true);
    resetStats();

    switch (algorithm) {
      case "bubble-sort":
        await bubbleSort(array, setArray, incrementComparisons, incrementSwaps);
        break;
      case "selection-sort":
        await selectionSort(
          array,
          setArray,
          incrementComparisons,
          incrementSwaps,
        );
        break;
      case "insertion-sort":
        await insertionSort(
          array,
          setArray,
          incrementComparisons,
          incrementSwaps,
        );
        break;
    }

    setIsSorting(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
      <TimeComplexity
        best={algorithmInfo.timeComplexity.best}
        average={algorithmInfo.timeComplexity.average}
        worst={algorithmInfo.timeComplexity.worst}
      />
      <div className="h-[200px] mt-6">
        <ArrayVisualizer array={array} />
      </div>
      <div className="mt-10 space-y-4">
        <SortingStats stats={stats} />
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSort}
            disabled={isSorting}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
              isSorting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Start Sorting
          </button>
          <button
            onClick={handleReset}
            disabled={isSorting}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
              isSorting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            Reset Array
          </button>
        </div>
      </div>
    </div>
  );
}
