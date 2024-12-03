import React from "react";
import { ArrayBar as ArrayBarType } from "../types";

interface ArrayVisualizerProps {
  array: ArrayBarType[];
}

const ArrayVisualizer: React.FC<ArrayVisualizerProps> = ({ array }) => {
  const maxValue = Math.max(...array.map((item) => item.value));

  return (
    <div className="flex items-end justify-center h-64 gap-1 p-4">
      {array.map((item, index) => (
        <div
          key={index}
          className={`w-4 transition-all duration-100 ${
            item.isComparing
              ? "bg-yellow-400"
              : item.isSwapping
              ? "bg-red-500"
              : item.isSorted
              ? "bg-green-500"
              : "bg-blue-500"
          }`}
          style={{
            height: `${(item.value / maxValue) * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default ArrayVisualizer;
