import React from "react";

function AboutSelection() {
  return (
    <div className="flex flex-row justify-evenly items-center text-[20px] w-full">
      <button className="rounded-full w-[250px] h-[250px] bg-[#BB004B] hover:bg-[#9b164b] transition duration-75 text-white">
        About AI
      </button>
      <button className="rounded-full w-[250px] h-[250px] bg-[#BB004B] hover:bg-[#9b164b] transition duration-75 text-white">
        About The Next Breakthrough
      </button>
      <button className="rounded-full w-[250px] h-[250px] bg-[#BB004B] hover:bg-[#9b164b] transition duration-75 text-white">
        About us
      </button>
    </div>
  );
}

export default AboutSelection;
