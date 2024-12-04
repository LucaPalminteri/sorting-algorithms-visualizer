"use client";

import { useState, useCallback } from "react";
import { generateRandomArray } from "../utils/arrayUtils";
import { useSortingStats } from "../hooks/useSortingStats";
import ArrayVisualizer from "./ArrayVisualizer";
import SortingStats from "./SortingStats";
import TimeComplexity from "./TimeComplexity";
import SpeedControls from "./SpeedControls";
import { bubbleSort } from "../algorithms/bubbleSort";
import { selectionSort } from "../algorithms/selectionSort";
import { insertionSort } from "../algorithms/insertionSort";
import { mergeSort } from "@/algorithms/mergeSort";
import { AlgorithmInfo, ArrayBar } from "../types";
import { quickSort } from "@/algorithms/quickSort";
import { heapSort } from "@/algorithms/heapSort";
import { introSort } from "@/algorithms/introSort";

const ARRAY_SIZE = 50;
const BASE_DELAY = 200;

interface SortingVisualizerProps {
  algorithm: string;
  algorithmInfo: AlgorithmInfo;
}

const SortingVisualizer: React.FC<SortingVisualizerProps> = ({ algorithm, algorithmInfo }) => {
  const [array, setArray] = useState<ArrayBar[]>(
    generateRandomArray(ARRAY_SIZE).map((value) => ({
      value,
      isComparing: false,
      isSorted: false,
      isSwapping: false,
    })),
  );
  const [isSorting, setIsSorting] = useState(false);
  const [speed, setSpeed] = useState(1);
  const { stats, resetStats, incrementComparisons, incrementSwaps } = useSortingStats();

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

    const delay = BASE_DELAY / speed;

    switch (algorithm) {
      case "bubble-sort":
        await bubbleSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "selection-sort":
        await selectionSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "insertion-sort":
        await insertionSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "merge-sort":
        await mergeSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "quick-sort":
        await quickSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "heap-sort":
        await heapSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "tim-sort":
        await heapSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
      case "intro-sort":
        await introSort(array, setArray, incrementComparisons, incrementSwaps, delay);
        break;
    }

    setIsSorting(false);
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
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
      <div className="mt-16 space-y-4">
        <SortingStats stats={stats} />
        <SpeedControls speed={speed} onSpeedChange={handleSpeedChange} disabled={isSorting} />
        <div className="flex justify-center gap-4">
          <button
            onClick={handleSort}
            disabled={isSorting}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
              isSorting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            Start Sorting
          </button>
          <button
            onClick={handleReset}
            disabled={isSorting}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg text-white transition-colors ${
              isSorting ? "bg-gray-400 cursor-not-allowed" : "bg-gray-500 hover:bg-gray-600"
            }`}
          >
            Reset Array
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizer;
