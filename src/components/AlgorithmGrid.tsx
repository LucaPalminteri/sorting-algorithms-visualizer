import React from "react";
import { algorithms } from "../data/algorithms";
import AlgorithmCard from "./AlgorithmCard";

interface AlgorithmGridProps {
  onSelectAlgorithm: (algorithmName: string) => void;
}

const AlgorithmGrid: React.FC<AlgorithmGridProps> = ({ onSelectAlgorithm }) => {
  return (
    <div className="space-y-8">
      {Object.entries(algorithms).map(([category, algs]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {algs.map((algorithm) => (
              <AlgorithmCard
                key={algorithm.name}
                algorithm={algorithm}
                onClick={() => onSelectAlgorithm(algorithm.name)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlgorithmGrid;
