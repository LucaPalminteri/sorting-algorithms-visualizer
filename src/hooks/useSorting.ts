import { useState, useCallback } from "react";
import { ArrayBar } from "../types";
import { sleep } from "../utils/arrayUtils";

export const useSorting = (initialArray: number[]) => {
  const [array, setArray] = useState<ArrayBar[]>(
    initialArray.map((value) => ({
      value,
      isComparing: false,
      isSorted: false,
      isSwapping: false,
    })),
  );
  const [speed, setSpeed] = useState(1);

  const resetArray = useCallback((newArray: number[]) => {
    setArray(
      newArray.map((value) => ({
        value,
        isComparing: false,
        isSorted: false,
        isSwapping: false,
      })),
    );
  }, []);

  const bubbleSort = async () => {
    const arr = [...array];
    const n = arr.length;
    const delay = 100 / speed;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        arr[j].isComparing = true;
        arr[j + 1].isComparing = true;
        setArray([...arr]);
        await sleep(delay);

        if (arr[j].value > arr[j + 1].value) {
          arr[j].isSwapping = true;
          arr[j + 1].isSwapping = true;
          setArray([...arr]);
          await sleep(delay);

          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }

        arr[j].isComparing = false;
        arr[j + 1].isComparing = false;
        arr[j].isSwapping = false;
        arr[j + 1].isSwapping = false;
        setArray([...arr]);
      }
      arr[n - i - 1].isSorted = true;
    }
    arr[0].isSorted = true;
    setArray([...arr]);
  };

  return { array, resetArray, bubbleSort, speed, setSpeed };
};
