"use client";

import { useRouter } from "next/navigation";
import AlgorithmGrid from "../components/AlgorithmGrid";
import { formatAlgorithmName } from "@/utils/arrayUtils";

export default function Home() {
  const router = useRouter();

  const handleSelectAlgorithm = (algorithmName: string) => {
    const formattedName = formatAlgorithmName(algorithmName);
    router.push(`/${formattedName}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
          Sorting Algorithms Visualizer
        </h1>
        <AlgorithmGrid onSelectAlgorithm={handleSelectAlgorithm} />
      </div>
    </div>
  );
}
