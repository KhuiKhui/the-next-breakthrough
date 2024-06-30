import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface ImgParamsInter {
  src: string;
  alt: string;
  name: string;
  desc: string;
}

function SpeakersTab({
  imgParams,
  show,
}: {
  imgParams: ImgParamsInter;
  show: boolean;
}) {
  return (
    <div
      className={clsx("flex flex-row justify-center items-center w-[100vw]", {
        block: show,
        hidden: show === false,
      })}
    >
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
        <div className="w-[200px]">{imgParams.desc}</div>
      </div>
    </div>
  );
}

export default SpeakersTab;
