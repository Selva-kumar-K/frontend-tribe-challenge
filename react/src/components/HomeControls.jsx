import Card from "./Card";
import arrowDown from "../assets/fa-arrow-down.svg";
import wareHouse from "../assets/fa-warehouse.svg";
import roomLight from "../assets/fa-warehouse 2.svg";
import fan from "../assets/fa-warehouse 3.svg";
import Svg from "./Svg";

const smartControls = [
  {
    logo: wareHouse,
    title: "Garage Door",
    status: "Closed",
    icon: arrowDown,
  },
  {
    logo: roomLight,
    title: "Living Room",
    status: "Off",
    icon: Svg,
  },
  {
    logo: fan,
    title: "Upstairs Bedroom",
    status: "Off",
    icon: Svg,
  },
];

export default function HomeControls() {
  return (
    <div className="h-screen bg-[#CBD5E1]">
      <div className="flex flex-col justify-center items-center ">
        <div className="flex gap-5 m-10">
          {smartControls.map((smartControl) => (
            <>
              <Card
                logo={smartControl.logo}
                title={smartControl.title}
                status={smartControl.status}
                icon={smartControl.icon}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
