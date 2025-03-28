import { useState } from "react";

export default function Temperature() {
  const [temperature, setTemperature] = useState(70);

  function handleUp() {
    setTemperature((prev) => prev + 1);
  }

  function handleDown() {
    setTemperature((prev) => prev - 1);
  }
  return (
    <div className="h-screen flex justify-center items-center bg-[#A855F7]/25">
      <div className="rounded-2xl p-8 bg-white">
        <h1 className="font-semibold text-[#6B7280] uppercase text-center">
          TEMPERATURE ℉
        </h1>
        <div className="flex gap-4 items-center">
          <button className="cursor-pointer" onClick={handleDown}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-chevron-down-icon lucide-circle-chevron-down stroke-[#9CA3AF]  w-10 h-10"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m16 10-4 4-4-4" />
            </svg>
          </button>

          <h2 className="text-[#A855F7] font-bold text-6xl">{temperature}</h2>

          <button className="cursor-pointer" onClick={handleUp}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-chevron-up-icon lucide-circle-chevron-up stroke-[#9CA3AF] w-10 h-10"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m8 14 4-4 4 4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
