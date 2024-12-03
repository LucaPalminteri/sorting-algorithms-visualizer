import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function heapSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];
  const n = arr.length;

  // Heapify a subtree rooted with node i
  async function heapify(arr: ArrayBar[], n: number, i: number) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // Mark root as comparing
    arr[largest].isComparing = true;
    setArray([...arr]);
    await sleep(delay);

    // Compare with left child
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

    // Compare with right child
    if (right < n) {
      arr[right].isComparing = true;
      setArray([...arr]);
      await sleep(delay);
      incrementComparisons();

      if (arr[right].value > arr[largest].value) {
        largest = right;
      }
    }

    // If largest is not root
    if (largest !== i) {
      // Swap
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

      // Recursively heapify the affected sub-tree
      await heapify(arr, n, largest);
    }

    // Reset comparing states
    arr[i].isComparing = false;
    if (left < n) arr[left].isComparing = false;
    if (right < n) arr[right].isComparing = false;
    setArray([...arr]);
  }

  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i);
  }

  // One by one extract elements
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
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

    // Mark last element as sorted
    arr[i].isSorted = true;
    setArray([...arr]);

    // Heapify the reduced heap
    await heapify(arr, i, 0);
  }

  // Ensure all elements are marked as sorted
  arr.forEach((bar) => {
    bar.isComparing = false;
    bar.isSwapping = false;
    bar.isSorted = true;
  });
  setArray([...arr]);
}
