import React from "react";
import { SortingStats as SortingStatsType } from "../types";
import { Activity } from "lucide-react";

interface SortingStatsProps {
  stats: SortingStatsType;
}

const SortingStats: React.FC<SortingStatsProps> = ({ stats }) => {
  return (
    <div className="flex items-center justify-center gap-4 bg-gray-50 p-4 rounded-lg">
      <Activity className="text-gray-600" />
      <div className="grid grid-cols-3 gap-8">
        <div>
          <p className="text-sm text-gray-600">Comparisons</p>
          <p className="text-2xl font-bold">{stats.comparisons}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Swaps</p>
          <p className="text-2xl font-bold">{stats.swaps}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Total Steps</p>
          <p className="text-2xl font-bold">{stats.steps}</p>
        </div>
      </div>
    </div>
  );
};

export default SortingStats;
