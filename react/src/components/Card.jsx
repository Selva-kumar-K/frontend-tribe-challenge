import Svg from "./Svg";

export default function Card({ logo, title, status, icon }) {
  return (
    <div className="rounded-md bg-white p-6 w-[160px]">
      <img src={logo} alt="warehouse" />

      <p className="font-semibold text-xl mt-3 text-[#334155]">{title}</p>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-[#334155]">{status}</p>
          {status === "Closed" ? <img src={icon} alt="icon" /> : <Svg />}
        </div>
      </div>
    </div>
  );
}
