import { algorithms } from "@/data/algorithms";
import { AlgorithmInfo } from "@/types";

export const generateRandomArray = (size: number): number[] => {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 100) + 1);
};

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export function findAlgorithmByName(algorithm: string): AlgorithmInfo | undefined {
  return Object.values(algorithms)
    .flat()
    .find((alg) => alg.name.toLowerCase().replace(/\s+/g, "-") === algorithm);
}

export function formatAlgorithmName(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
