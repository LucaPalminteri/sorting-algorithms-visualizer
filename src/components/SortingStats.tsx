"use client";

import { SortingStats as SortingStatsType } from "../types";

interface SortingStatsProps {
  stats: SortingStatsType;
}

const SortingStats: React.FC<SortingStatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg">
      <div className="flex items-center gap-3 justify-center">
        <div>
          <p className="text-sm text-gray-600">Comparisons</p>
          <p className="text-2xl font-bold text-blue-600">{stats.comparisons}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <div>
          <p className="text-sm text-gray-600">Swaps</p>
          <p className="text-2xl font-bold text-green-600">{stats.swaps}</p>
        </div>
      </div>
      <div className="flex items-center gap-3 justify-center">
        <div>
          <p className="text-sm text-gray-600">Total Steps</p>
          <p className="text-2xl font-bold text-purple-600">{stats.steps}</p>
        </div>
      </div>
    </div>
  );
};

export default SortingStats;
