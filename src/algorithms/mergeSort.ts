import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function mergeSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];

  // Merge function to combine two sorted subarrays
  async function merge(arr: ArrayBar[], left: number, mid: number, right: number) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0,
      j = 0,
      k = left;

    while (i < leftArr.length && j < rightArr.length) {
      // Mark comparing elements
      leftArr[i].isComparing = true;
      rightArr[j].isComparing = true;
      setArray([...arr]);
      await sleep(delay);

      // Increment comparison
      incrementComparisons();

      if (leftArr[i].value <= rightArr[j].value) {
        // Swap and mark
        arr[k] = leftArr[i];
        arr[k].isSwapping = true;
        incrementSwaps();
        i++;
      } else {
        // Swap and mark
        arr[k] = rightArr[j];
        arr[k].isSwapping = true;
        incrementSwaps();
        j++;
      }

      // Reset states
      if (i > 0) leftArr[i - 1].isComparing = false;
      if (j > 0) rightArr[j - 1].isComparing = false;
      arr[k].isSwapping = false;
      arr[k].isSorted = true;

      setArray([...arr]);
      await sleep(delay);
      k++;
    }

    // Handle remaining elements in left array
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      arr[k].isSwapping = true;
      arr[k].isSorted = true;
      setArray([...arr]);
      await sleep(delay);
      incrementSwaps();
      arr[k].isSwapping = false;
      i++;
      k++;
    }

    // Handle remaining elements in right array
    while (j < rightArr.length) {
      arr[k] = rightArr[j];
      arr[k].isSwapping = true;
      arr[k].isSorted = true;
      setArray([...arr]);
      await sleep(delay);
      incrementSwaps();
      arr[k].isSwapping = false;
      j++;
      k++;
    }

    // Ensure the sorted section is marked as sorted
    for (let x = left; x <= right; x++) {
      arr[x].isSorted = true;
    }
    setArray([...arr]);
  }

  // Recursive merge sort implementation
  async function mergeSortRecursive(arr: ArrayBar[], left: number, right: number) {
    if (left >= right) return;

    const mid = Math.floor((left + right) / 2);

    await mergeSortRecursive(arr, left, mid);
    await mergeSortRecursive(arr, mid + 1, right);

    await merge(arr, left, mid, right);
  }

  // Start the merge sort process
  await mergeSortRecursive(arr, 0, arr.length - 1);

  // Ensure all elements are marked as sorted
  arr.forEach((bar) => {
    bar.isComparing = false;
    bar.isSwapping = false;
    bar.isSorted = true;
  });
  setArray([...arr]);
}
