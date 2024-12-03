import React from "react";
import { Gauge } from "lucide-react";

interface SpeedControlsProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
}

const SpeedControls: React.FC<SpeedControlsProps> = ({ speed, onSpeedChange }) => {
  const speeds = [
    { value: 1, label: "1x" },
    { value: 1.5, label: "1.5x" },
    { value: 2, label: "2x" },
    { value: 5, label: "5x" },
  ];

  return (
    <div className="flex items-center gap-4">
      <Gauge size={20} className="text-gray-600" />
      <div className="flex gap-2">
        {speeds.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onSpeedChange(value)}
            className={`px-3 py-1 rounded ${
              speed === value ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
