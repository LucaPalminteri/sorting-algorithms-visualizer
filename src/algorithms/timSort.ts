import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function timSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];
  const MIN_MERGE = 32;

  // Insertion sort for small arrays
  async function insertionSort(arr: ArrayBar[], left: number, right: number) {
    for (let i = left + 1; i <= right; i++) {
      const key = arr[i];
      let j = i - 1;

      // Mark current element as comparing
      key.isComparing = true;
      setArray([...arr]);
      await sleep(delay);

      while (j >= left && arr[j].value > key.value) {
        // Mark comparing elements
        arr[j].isComparing = true;
        key.isComparing = true;
        setArray([...arr]);
        await sleep(delay);
        incrementComparisons();

        // Shift elements
        arr[j + 1] = arr[j];
        arr[j].isSwapping = true;
        setArray([...arr]);
        await sleep(delay);
        incrementSwaps();

        arr[j].isSwapping = false;
        arr[j].isComparing = false;
        j--;
      }

      // Place key in correct position
      arr[j + 1] = key;
      key.isComparing = false;
      setArray([...arr]);
    }
  }

  // Merge two sorted subarrays
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
      incrementComparisons();

      if (leftArr[i].value <= rightArr[j].value) {
        arr[k] = leftArr[i];
        arr[k].isSwapping = true;
        setArray([...arr]);
        await sleep(delay);
        incrementSwaps();
        i++;
      } else {
        arr[k] = rightArr[j];
        arr[k].isSwapping = true;
        setArray([...arr]);
        await sleep(delay);
        incrementSwaps();
        j++;
      }

      // Reset states
      arr[k].isSwapping = false;
      arr[k].isComparing = false;
      k++;
    }

    // Handle remaining elements in left array
    while (i < leftArr.length) {
      arr[k] = leftArr[i];
      arr[k].isSwapping = true;
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
      setArray([...arr]);
      await sleep(delay);
      incrementSwaps();
      arr[k].isSwapping = false;
      j++;
      k++;
    }

    // Mark sorted section
    for (let x = left; x <= right; x++) {
      arr[x].isSorted = true;
    }
    setArray([...arr]);
  }

  // Main Tim Sort implementation
  async function timSortRecursive(arr: ArrayBar[], n: number) {
    // Sort individual subarrays of size RUN
    for (let i = 0; i < n; i += MIN_MERGE) {
      await insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1));
    }

    // Start merging from size RUN (or 32)
    for (let size = MIN_MERGE; size < n; size = 2 * size) {
      for (let left = 0; left < n; left += 2 * size) {
        const mid = left + size - 1;
        const right = Math.min(left + 2 * size - 1, n - 1);

        // Merge if mid exists
        if (mid < right) {
          await merge(arr, left, mid, right);
        }
      }
    }
  }

  // Start Tim Sort process
  await timSortRecursive(arr, arr.length);

  // Ensure all elements are marked as sorted
  arr.forEach((bar) => {
    bar.isComparing = false;
    bar.isSwapping = false;
    bar.isSorted = true;
  });
  setArray([...arr]);
}
