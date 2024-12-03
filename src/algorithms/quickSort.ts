import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function quickSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];

  // Partition function
  async function partition(arr: ArrayBar[], low: number, high: number): Promise<number> {
    // Choose the rightmost element as pivot
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
        // Swap elements
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

    // Place pivot in correct position
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

  // Recursive quick sort implementation
  async function quickSortRecursive(arr: ArrayBar[], low: number, high: number) {
    if (low < high) {
      // Partition the array
      const pivotIndex = await partition(arr, low, high);

      // Recursively sort elements before and after partition
      await quickSortRecursive(arr, low, pivotIndex - 1);
      await quickSortRecursive(arr, pivotIndex + 1, high);
    } else if (low === high) {
      // Single element is always sorted
      arr[low].isSorted = true;
      setArray([...arr]);
    }
  }

  // Start the quick sort process
  await quickSortRecursive(arr, 0, arr.length - 1);

  // Ensure all elements are marked as sorted
  arr.forEach((bar) => {
    bar.isComparing = false;
    bar.isSwapping = false;
    bar.isSorted = true;
  });
  setArray([...arr]);
}
