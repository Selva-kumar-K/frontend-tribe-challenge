import {
  House,
  Caravan,
  Tent,
  MapPinned,
  BriefcaseConveyorBelt,
} from "lucide-react";
import { useState } from "react";

const menus = [
  {
    icon: <House />,
    title: "Home",
  },
  {
    icon: <Caravan />,
    title: "My Trips",
  },
  {
    icon: <Tent />,
    title: "My Campgrounds",
  },
  {
    icon: <MapPinned />,
    title: "Saved Routes",
  },
  {
    icon: <BriefcaseConveyorBelt />,
    title: "Settings",
  },
];

export default function DashboardNavigation() {
  const [selctedTab, setSelectedTab] = useState("");
  return (
    <div className="h-screen flex justify-center items-center bg-[#F5F5F5]">
      <div className="rounded-2xl p-4 bg-white shadow-2xl">
        <div className="flex flex-col gap-2">
          {menus.map((menus) => (
            <div
              key={menus.title}
              className={`p-4 flex gap-4 items-center rounded-xl cursor-pointer ${
                selctedTab === menus.title ? "bg-[#E2E8EF]" : ""
              }`}
              onClick={() => setSelectedTab(menus.title)}
            >
              {menus.icon}
              <span className="font-medium text-lg">{menus.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
