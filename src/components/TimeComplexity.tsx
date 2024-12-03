interface TimeComplexityProps {
  best: string;
  average: string;
  worst: string;
}

const TimeComplexity: React.FC<TimeComplexityProps> = ({
  best,
  average,
  worst,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 rounded-lg text-center">
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Best Case</div>
        <div className="text-lg font-mono bg-green-100 rounded-md p-2">
          {best}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Average Case</div>
        <div className="text-lg font-mono bg-yellow-100 rounded-md p-2">
          {average}
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-sm font-medium text-gray-600">Worst Case</div>
        <div className="text-lg font-mono bg-red-100 rounded-md p-2">
          {worst}
        </div>
      </div>
    </div>
  );
};

export default TimeComplexity;
