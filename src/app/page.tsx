"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const deadline: number = new Date("2024-07-15").getTime();
  const timeRef = useRef<any>();
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (timeRef.current) {
      clearInterval(timeRef.current);
    }
    const inter = setInterval(() => {
      const timeUntilDeadline = (deadline - new Date().getTime()) / 1000; // in seconds
      setDays(Math.floor(timeUntilDeadline / 86400));
      setHours(Math.floor((timeUntilDeadline / 3600) % 24));
      setMinutes(Math.floor((timeUntilDeadline / 60) % 60));
      setSeconds(Math.floor(timeUntilDeadline % 60));
    }, 1000);
    timeRef.current = inter;
  }, []);
  return (
    <div className="text-white bg-[linear-gradient(to_bottom_right,#030130,#01002E)] h-[2000px] p-5 w-full flex flex-col items-center overflow-hidden">
      <div className=" text-[50px] mt-[100px] mb-[30px]">
        AI: The Next Breakthrough
      </div>
      <div className="text-[20px] w-[600px] mb-[100px] h-fit flex flex-row justify-center items-center">
        The AI Workshop built for AI enthusiasts, by AI enthusiasts!
      </div>
      <div className="bg-gradient-to-t from-[#030130] to-[#300552] rounded-md border-2 border-purple-400 shadow-sm shadow-purple-500 w-[800px] h-[200px] flex flex-col justify-between items-center text-[25px]">
        <b className="pt-[5px] h-fit">Tickets to the Future!</b>
        <div className="flex flex-row justify-around items-center w-full mb-[20px]">
          <div className="text-[16px] w-[400px] text-right">
            AI: The Next Breakthrough is a workshop centered around AI
            development and technology. Here at our workshop, you{"'"}ll have
            the opportunity to get up-to-date with the latest AI innovations,
            hear talks from esteemed AI experts and participate in exciting
            activities, only for tech enjoyers!
          </div>
          <div className="w-[300px] text-center">
            <div>Tick Tock!</div>
            <div>
              {days < 10 ? "0" + days : days} :{" "}
              {hours < 10 ? "0" + hours : hours} :{" "}
              {minutes < 10 ? "0" + minutes : minutes} :{" "}
              {seconds < 10 ? "0" + seconds : seconds}
            </div>
            <button className="bg-black p-[8px] mt-3 rounded-md hover:bg-violet-950">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
