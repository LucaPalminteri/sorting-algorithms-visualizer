import { AlgorithmInfo } from "@/types";

export const algorithms: Record<string, AlgorithmInfo[]> = {
  "Simple Sorting Algorithms": [
    {
      name: "Bubble Sort",
      category: "simple",
      description: "Compare adjacent elements and swap if out of order.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
      },
    },
    {
      name: "Selection Sort",
      category: "simple",
      description: "Find the smallest element and place it in the correct position.",
      timeComplexity: {
        best: "O(n²)",
        average: "O(n²)",
        worst: "O(n²)",
      },
    },
    {
      name: "Insertion Sort",
      category: "simple",
      description: "Insert each element into its correct position in the sorted part.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n²)",
        worst: "O(n²)",
      },
    },
  ],
  "Efficient Sorting Algorithms": [
    {
      name: "Merge Sort",
      category: "efficient",
      description: "Divide and conquer approach; recursively split and merge sorted subarrays.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
    {
      name: "Quick Sort",
      category: "efficient",
      description: "Divide and conquer; select a pivot, partition, and recursively sort subarrays.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n²)",
      },
    },
    {
      name: "Heap Sort",
      category: "efficient",
      description: "Uses a heap data structure to repeatedly extract the maximum/minimum element.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
  ],
  "Advanced Comparison-Based Algorithms": [
    {
      name: "Tim Sort",
      category: "advanced",
      description: "Hybrid of merge and insertion sort; optimized for real-world data.",
      timeComplexity: {
        best: "O(n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
    {
      name: "Intro Sort",
      category: "advanced",
      description:
        "Hybrid of quick sort and heap sort; switches to heap sort in worst-case scenarios.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
  ],
};
