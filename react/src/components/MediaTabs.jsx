import { Film, Image, Images } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const mediaTabs = [
  {
    icon: <Film size={20} />,
    title: "Videos",
    count: "108",
  },
  {
    icon: <Image size={20} />,
    title: "Photos",
    count: "1,015",
  },
  {
    icon: <Images size={20} />,
    title: "Collections",
    count: "34",
  },
];

export default function MediaTabs() {
  const [selctedTab, setSelectedTab] = useState("");
  return (
    <div className="h-screen flex justify-center items-center bg-[#F5F5F5]">
      <div className="px-8 bg-white rounded-2xl drop-shadow-lg flex gap-12">
        {mediaTabs.map((mediaTab) => (
          <div
            onClick={() => setSelectedTab(mediaTab.title)}
            key={mediaTab.title}
            className={twMerge(
              "flex items-center py-7 gap-3 border-b-4 border-transparent cursor-pointer",
              selctedTab == mediaTab.title && "border-b-4 border-gray-700"
            )}
          >
            {mediaTab.icon}
            <span className="font-semibold text-lg">{mediaTab.title}</span>
            <span className="font-semibold text-lg px-2 py-1  bg-[#E2E8EF] rounded-full">
              {mediaTab.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
