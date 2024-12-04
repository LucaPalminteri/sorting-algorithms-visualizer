import { AlgorithmInfo } from "@/types";

export const algorithms: Record<string, AlgorithmInfo[]> = {
  "Simple Sorting Algorithms": [
    {
      name: "Bubble Sort",
      category: "simple",
      description: "Compare adjacent elements and swap if out of order.",
      largeDescription:
        "Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is sorted. Though easy to understand and implement, Bubble Sort is inefficient for large datasets due to its quadratic time complexity. It works best for small datasets or when the list is nearly sorted.",
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
      largeDescription:
        "Selection Sort operates by dividing the list into two parts: a sorted portion and an unsorted portion. It repeatedly selects the smallest (or largest) element from the unsorted part and places it in its correct position in the sorted part. While it performs fewer swaps than Bubble Sort, it is still not efficient for large datasets, as it involves scanning the unsorted portion multiple times.",
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
      largeDescription:
        "Insertion Sort builds the sorted list one element at a time. It takes each element from the unsorted portion and inserts it into its correct position within the sorted portion. With a best-case time complexity of O(n), it is efficient for small or nearly sorted datasets. However, its quadratic worst-case complexity makes it less suitable for large datasets.",
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
      largeDescription:
        "Merge Sort is a divide-and-conquer algorithm that divides the list into smaller sublists, sorts each sublist, and merges them back together in sorted order. With a consistent time complexity of O(n log n), it is much faster than simpler algorithms for larger datasets. However, it requires additional memory for merging, making it less space-efficient.",
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
      largeDescription:
        "Quick Sort is another divide-and-conquer algorithm that selects a pivot, partitions the list around the pivot, and recursively sorts the partitions. It is highly efficient for large datasets with an average time complexity of O(n log n). However, its performance can degrade to O(n²) if the pivot is poorly chosen, although this can be mitigated with optimizations like random pivot selection.",
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
      largeDescription:
        "Heap Sort uses a binary heap data structure to sort elements. It repeatedly extracts the maximum (or minimum) element from the heap and places it in its correct position. With a time complexity of O(n log n) and in-place sorting, Heap Sort is efficient and doesn't require additional memory. However, it may be slower in practice compared to Quick Sort due to more complex memory access patterns.",
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
      largeDescription:
        "Tim Sort is a hybrid sorting algorithm combining Merge Sort and Insertion Sort, designed to perform exceptionally well on real-world data. It divides the list into small chunks, sorts them using Insertion Sort, and then merges them using Merge Sort. With a best-case time complexity of O(n), Tim Sort is highly optimized for partially sorted datasets, making it the default sorting algorithm in many programming languages.",
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
      largeDescription:
        "Intro Sort begins with Quick Sort and switches to Heap Sort when recursion depth exceeds a certain threshold, preventing the O(n²) worst-case scenario of Quick Sort. By combining the strengths of multiple algorithms, Intro Sort achieves consistent O(n log n) performance, making it a robust choice for general-purpose sorting.",
      timeComplexity: {
        best: "O(n log n)",
        average: "O(n log n)",
        worst: "O(n log n)",
      },
    },
  ],
};
