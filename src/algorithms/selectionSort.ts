import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function selectionSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void
) {
  const arr = [...array];
  const n = arr.length;
  const delay = 50;

  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      arr[j].isComparing = true;
      arr[minIdx].isComparing = true;
      setArray([...arr]);
      await sleep(delay);
      incrementComparisons();

      if (arr[j].value < arr[minIdx].value) {
        arr[minIdx].isComparing = false;
        minIdx = j;
      }

      arr[j].isComparing = false;
      setArray([...arr]);
    }

    if (minIdx !== i) {
      arr[i].isSwapping = true;
      arr[minIdx].isSwapping = true;
      setArray([...arr]);
      await sleep(delay);

      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      incrementSwaps();
    }

    arr[i].isSwapping = false;
    arr[minIdx].isSwapping = false;
    arr[i].isSorted = true;
    setArray([...arr]);
  }

  arr[n - 1].isSorted = true;
  setArray([...arr]);
}
