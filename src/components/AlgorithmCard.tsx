"use client";

import { AlgorithmInfo } from "@/types";

interface AlgorithmCardProps {
  algorithm: AlgorithmInfo;
  onClick: () => void;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-102 cursor-pointer"
    >
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{algorithm.name}</h3>
      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{algorithm.description}</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-green-50 p-2 rounded-lg">
          <p className="text-xs text-green-600 font-medium mb-1">Best</p>
          <p className="text-sm font-mono font-bold text-green-700">
            {algorithm.timeComplexity.best}
          </p>
        </div>
        <div className="bg-yellow-50 p-2 rounded-lg">
          <p className="text-xs text-yellow-600 font-medium mb-1">Average</p>
          <p className="text-sm font-mono font-bold text-yellow-700">
            {algorithm.timeComplexity.average}
          </p>
        </div>
        <div className="bg-red-50 p-2 rounded-lg">
          <p className="text-xs text-red-600 font-medium mb-1">Worst</p>
          <p className="text-sm font-mono font-bold text-red-700">
            {algorithm.timeComplexity.worst}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlgorithmCard;
