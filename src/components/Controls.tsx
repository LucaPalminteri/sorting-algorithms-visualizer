"use client";

import { Play, RotateCcw } from "lucide-react";
import SpeedControls from "./SpeedControls";

interface ControlsProps {
  onSort: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
  disabled: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  onSort,
  onReset,
  speed,
  onSpeedChange,
  disabled,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center my-4">
      <div className="flex gap-4">
        <button
          onClick={onSort}
          disabled={disabled}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            disabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          <Play size={20} /> Start Sorting
        </button>
        <button
          onClick={onReset}
          disabled={disabled}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
            disabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gray-500 hover:bg-gray-600 text-white"
          }`}
        >
          <RotateCcw size={20} /> Reset Array
        </button>
      </div>
      <SpeedControls
        speed={speed}
        onSpeedChange={onSpeedChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Controls;
