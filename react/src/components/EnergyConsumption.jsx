import { TrendingDown, TrendingUp } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const consumptions = [
  {
    year: "This month",
    watts: "124",
    percentage: -16,
  },
  {
    year: "Last 3 months",
    watts: "576",
    percentage: 9,
  },
  {
    year: "Last year",
    watts: "1,056",
    percentage: -11,
  },
];

export default function EnergyConsumption() {
  const [selectedConsumption, setSelectedConsumption] = useState(
    consumptions[0].year
  );
  return (
    <div className="flex justify-center items-center h-screen bg-[#F5F5F5]">
      <div className="p-14 rounded-3xl bg-white drop-shadow-lg">
        <div>
          {/* First div */}
          <div className="p-3 flex gap-2 bg-[#E2E8F0] rounded-lg">
            {consumptions.map((consumption) => (
              <div
                onClick={() => setSelectedConsumption(consumption.year)}
                key={consumption.year}
                className={twMerge(
                  "text-[#1E293B] rounded-lg font-bold p-2.5 w-[140px] h-12 flex justify-center items-center cursor-pointer",
                  selectedConsumption === consumption.year &&
                    "bg-[#1E293B] text-white"
                )}
              >
                {consumption.year}
              </div>
            ))}
          </div>

          {/* Second div */}

          {consumptions.map((consumption) => {
            if (selectedConsumption === consumption.year) {
              return (
                <div
                  className="mt-6 flex justify-between"
                  key={consumption.year}
                >
                  <h1 className="text-lg font-bold text-[#1E293B]">
                    Energy consumption
                  </h1>
                  <div>
                    <h1 className="text-[#1E293B] font-medium">
                      <span className="text-4xl font-bold">
                        {consumption.watts}
                      </span>
                      kWh
                    </h1>
                    <div className="flex justify-end gap-1">
                      {consumption.percentage < 0 ? (
                        <TrendingDown className="stroke-[#15803D]" />
                      ) : (
                        <TrendingUp className="stroke-red-500" />
                      )}

                      <span className="text-[#15803D] font-bold">
                        {consumption.percentage}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
