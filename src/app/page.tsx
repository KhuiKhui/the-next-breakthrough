"use client";
import AboutSelection from "@/components/AboutSelection";
import Register from "@/components/Register";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-white bg-gradient-to-b from-[#030130] to-[#01002E] min-h-max w-full flex flex-col items-center overflow-hidden">
      <div className="text-[40px] md:text-[50px] mt-[100px] mb-[30px]">
        AI: The Next Breakthrough
      </div>
      <div className="text-[20px] w-[600px] mb-[100px] h-fit flex flex-row justify-center items-center">
        The AI Workshop built for AI enthusiasts, by AI enthusiasts!
      </div>
      <Register />
      <div className="w-full">
        <img src="/transition-1.svg" alt="transition" width="100%"></img>
      </div>
      <div id="about"></div>
      <div className="w-full h-[500px] bg-[#C62368] flex justify-center">
        <AboutSelection />
      </div>
      <div className="w-full">
        <img src="/transition-1-flip.svg" alt="transition" width="100%"></img>
      </div>
    </div>
  );
}
