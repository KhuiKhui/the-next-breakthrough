import React from "react";
import Image from "next/image";

interface ImgParamsInter {
  src: string;
  alt: string;
  name: string;
  desc: string;
}

function SpeakersTab({ imgParams }: { imgParams: ImgParamsInter }) {
  return (
    <div className="flex flex-row justify-center items-center w-[100vw]">
      <Image
        src={imgParams.src}
        alt={imgParams.alt}
        width={400}
        height={400}
        className="mr-[50px] ml-[-200px]"
      ></Image>
      <div className="self-start">
        <div className="font-bold text-[30px]">{imgParams.name}</div>
        <br></br>
        <div>{imgParams.desc}</div>
      </div>
    </div>
  );
}

export default SpeakersTab;
