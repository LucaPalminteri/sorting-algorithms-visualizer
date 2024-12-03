import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function introSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];
  const n = arr.length;

  // Maximum depth for recursion before switching to heapsort
  const maxDepth = 2 * Math.floor(Math.log2(n));

  // Insertion sort for small arrays
  async function insertionSort(arr: ArrayBar[], left: number, right: number) {
    for (let i = left + 1; i <= right; i++) {
      const key = arr[i];
      let j = i - 1;

      key.isComparing = true;
      setArray([...arr]);
      await sleep(delay);

      while (j >= left && arr[j].value > key.value) {
        incrementComparisons();
        arr[j].isComparing = true;
        setArray([...arr]);
        await sleep(delay);

        arr[j + 1] = arr[j];
        arr[j].isSwapping = true;
        setArray([...arr]);
        await sleep(delay);
        incrementSwaps();

        arr[j].isSwapping = false;
        arr[j].isComparing = false;
        j--;
      }

      arr[j + 1] = key;
      key.isComparing = false;
      setArray([...arr]);
    }
  }

  // Partition function (similar to quicksort)
  async function partition(arr: ArrayBar[], low: number, high: number): Promise<number> {
    const pivot = arr[high];
    pivot.isComparing = true;
    setArray([...arr]);
    await sleep(delay);

    let i = low - 1;

    for (let j = low; j < high; j++) {
      arr[j].isComparing = true;
      setArray([...arr]);
      await sleep(delay);
      incrementComparisons();

      if (arr[j].value < pivot.value) {
        i++;
        arr[j].isSwapping = true;
        arr[i].isSwapping = true;
        setArray([...arr]);
        await sleep(delay);

        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        incrementSwaps();

        arr[j].isSwapping = false;
        arr[i].isSwapping = false;
      }

      arr[j].isComparing = false;
      setArray([...arr]);
    }

    i++;
    arr[i].isSwapping = true;
    arr[high].isSwapping = true;
    setArray([...arr]);
    await sleep(delay);

    const temp = arr[i];
    arr[i] = arr[high];
    arr[high] = temp;
    incrementSwaps();

    arr[i].isSwapping = false;
    arr[high].isSwapping = false;
    pivot.isComparing = false;
    arr[i].isSorted = true;

    setArray([...arr]);
    return i;
  }

  // Heapify for heapsort
  async function heapify(arr: ArrayBar[], n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    arr[largest].isComparing = true;
    setArray([...arr]);
    await sleep(delay);

    if (left < n) {
      arr[left].isComparing = true;
      setArray([...arr]);
      await sleep(delay);
      incrementComparisons();
      if (arr[left].value > arr[largest].value) {
        arr[largest].isComparing = false;
        largest = left;
      }
    }

    if (right < n) {
      arr[right].isComparing = true;
      setArray([...arr]);
      await sleep(delay);
      incrementComparisons();
      if (arr[right].value > arr[largest].value) {
        largest = right;
      }
    }

    if (largest !== i) {
      arr[i].isSwapping = true;
      arr[largest].isSwapping = true;
      setArray([...arr]);
      await sleep(delay);

      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;
      incrementSwaps();

      arr[i].isSwapping = false;
      arr[largest].isSwapping = false;

      await heapify(arr, n, largest);
    }

    arr[i].isComparing = false;
    if (left < n) arr[left].isComparing = false;
    if (right < n) arr[right].isComparing = false;
    setArray([...arr]);
  }

  // Heapsort for when recursion depth is too deep
  async function heapSort(arr: ArrayBar[], n: number) {
    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      await heapify(arr, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
      arr[0].isSwapping = true;
      arr[i].isSwapping = true;
      setArray([...arr]);
      await sleep(delay);

      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;
      incrementSwaps();

      arr[0].isSwapping = false;
      arr[i].isSwapping = false;
      arr[i].isSorted = true;
      setArray([...arr]);

      await heapify(arr, i, 0);
    }
  }

  // Recursive introsort implementation
  async function introSortRecursive(arr: ArrayBar[], low: number, high: number, depth: number) {
    // If array is small, use insertion sort
    if (high - low <= 16) {
      await insertionSort(arr, low, high);
      return;
    }

    // If recursion depth is too deep, switch to heapsort
    if (depth === 0) {
      await heapSort(arr, high - low + 1);
      return;
    }

    // Partition and recursively sort
    const pivotIndex = await partition(arr, low, high);
    await introSortRecursive(arr, low, pivotIndex - 1, depth - 1);
    await introSortRecursive(arr, pivotIndex + 1, high, depth - 1);
  }

  // Start the introsort process
  await introSortRecursive(arr, 0, arr.length - 1, maxDepth);

  // Ensure all elements are marked as sorted
  arr.forEach((bar) => {
    bar.isComparing = false;
    bar.isSwapping = false;
    bar.isSorted = true;
  });
  setArray([...arr]);
}
