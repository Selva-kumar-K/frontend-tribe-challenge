import RotateCw from "lucide-react/dist/esm/icons/rotate-cw";
import { useEffect, useState } from "react";

export default function DogImage() {
  const [src, setSrc] = useState();

  useEffect(() => {
    fetch("https://random.dog/woof.json")
      .then((res) => res.json())
      .then((data) => setSrc(data.url))
      .catch((err) => console.log(err));
  }, []);

  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div className="h-screen flex justify-center items-center bg-[#F5F5F5]">
      <div className="w-[320px]">
        <h1 className="font-bold text-3xl leading-9 text-center">
          Random Dog <br></br>Photo Generator
        </h1>
        <div className="mt-6 rounded-md bg-white p-5  ">
          {src ? (
            <img
              src={src}
              alt="dog-image"
              className="w-[288px] h-[288px] bg-cover"
            />
          ) : (
            <div className="flex justify-center items-center">Loading...</div>
          )}
        </div>
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleClick}
            className="bg-[#A2E634] font-bold text-xl rounded-md flex items-center gap-2.5 px-6 py-3 cursor-pointer"
          >
            Refresh <RotateCw size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
