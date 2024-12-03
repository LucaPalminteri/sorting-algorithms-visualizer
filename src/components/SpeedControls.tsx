"use client";

import { Gauge } from "lucide-react";

interface SpeedControlsProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
  disabled: boolean;
}

const SpeedControls: React.FC<SpeedControlsProps> = ({ speed, onSpeedChange, disabled }) => {
  const speeds = [
    { value: 1, label: "1x" },
    { value: 1.5, label: "1.5x" },
    { value: 2, label: "2x" },
    { value: 5, label: "5x" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 bg-gray-50 p-4 rounded-lg">
      <Gauge className="text-gray-600" size={20} />
      <div className="flex gap-2">
        {speeds.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onSpeedChange(value)}
            disabled={disabled}
            className={`px-4 py-2 rounded-lg transition-colors ${
              speed === value
                ? "bg-blue-500 text-white"
                : disabled
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeedControls;
