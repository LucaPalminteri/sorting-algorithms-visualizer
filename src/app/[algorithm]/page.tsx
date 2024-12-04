"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SortingVisualizer from "../../components/SortingVisualizer";
import { use } from "react";
import { AlgorithmInfo } from "@/types";
import { findAlgorithmByName } from "@/utils/arrayUtils";

// TODO: Add some further description of the algorithm below
// TODO: Add some code implementation of the algorithm below
// TODO: Add the option to vary the array size
// TODO: Add step by step visualization of the algorithm

type PageProps = {
  params: Promise<{ algorithm: string }>;
};

export default function AlgorithmPage({ params }: PageProps) {
  const { algorithm } = use(params);

  const algorithmInfo: AlgorithmInfo | undefined = findAlgorithmByName(algorithm);

  if (!algorithmInfo) {
    return <div>Algorithm not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2" /> Back to Algorithms
        </Link>
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">{algorithmInfo.name}</h1>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              {algorithmInfo.largeDescription}
            </p>
          </div>
          <SortingVisualizer algorithm={algorithm} algorithmInfo={algorithmInfo} />
        </div>
      </div>
    </div>
  );
}
