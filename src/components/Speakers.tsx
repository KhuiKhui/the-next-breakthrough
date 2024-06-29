import Image from "next/image";
import React from "react";

function Speakers() {
  return (
    <div className="flex flex-col justify-center items-center mb-[100px]">
      <b className="text-[30px] mb-[50px]">Speakers</b>

      <div>
        <Image src="/class_pic.png" alt="temp" width={400} height={700}></Image>
      </div>
    </div>
  );
}

export default Speakers;
