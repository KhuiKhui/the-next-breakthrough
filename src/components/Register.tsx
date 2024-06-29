"use client";
import React from "react";
import { useEffect, useRef, useState } from "react";

function Register() {
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
    <div className="bg-gradient-to-t from-[#030130] to-[#300552] rounded-md border-2 border-purple-400 shadow-sm shadow-purple-500 w-[400px] md:w-[600px] lg:w-[800px] h-[200px] flex flex-col justify-between items-center text-[25px]">
      <b className="pt-[5px] h-fit">Tickets to the Future!</b>
      <div className="flex flex-row justify-around items-center w-full mb-[20px]">
        <div className="text-[12px] md:text-[16px] w-[400px] text-right">
          AI: The Next Breakthrough is a workshop centered around AI development
          and technology. Here at our workshop, you{"'"}ll have the opportunity
          to get up-to-date with the latest AI innovations, hear talks from
          esteemed AI experts and participate in exciting activities, only for
          tech enjoyers!
        </div>
        <div className="w-[300px] text-center">
          <div>Tick Tock!</div>
          <div>
            {days < 10 ? "0" + days : days} : {hours < 10 ? "0" + hours : hours}{" "}
            : {minutes < 10 ? "0" + minutes : minutes} :{" "}
            {seconds < 10 ? "0" + seconds : seconds}
          </div>
          <button className="bg-black p-[8px] mt-3 rounded-md hover:bg-violet-950">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
