import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export async function insertionSort(
  array: ArrayBar[],
  setArray: (arr: ArrayBar[]) => void,
  incrementComparisons: () => void,
  incrementSwaps: () => void,
  delay: number,
) {
  const arr = [...array];
  const n = arr.length;

  arr[0].isSorted = true;
  setArray([...arr]);

  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;

    arr[i].isComparing = true;
    setArray([...arr]);
    await sleep(delay);

    while (j >= 0 && arr[j].value > key.value) {
      incrementComparisons();
      arr[j].isComparing = true;
      setArray([...arr]);
      await sleep(delay);

      arr[j + 1] = arr[j];
      arr[j].isComparing = false;
      arr[j].isSwapping = true;
      incrementSwaps();

      j--;
      setArray([...arr]);
      await sleep(delay);
    }

    arr[j + 1] = key;
    arr[j + 1].isComparing = false;
    arr[j + 1].isSwapping = false;
    arr[j + 1].isSorted = true;
    setArray([...arr]);
  }
}
